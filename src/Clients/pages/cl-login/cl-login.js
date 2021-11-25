import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUserData } from "../../../redux/actions/userActions/userActions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function CLLogin() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.User);
  const [loginErr, setLoginErr] = useState();

  const handleChange = (e) => {
    e.persist();
    setState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleLoginForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", state.email);
    formData.append("password", state.password);

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post("/api/Login", formData).then((response) => {
        console.log(response);
        if (response.data.status.code == "200") {
          setLoginErr("");
          dispatch(
            getUserData(
              response.data.data.userToken,
              response.data.data.user_id,
              response.data.data.user_type
            )
          );
          window.location = "/clUser/Dash";
        } else if (response.data.status.code == "422") {
          setLoginErr("Email or Password are wrong");
        } else if (response.data.status.code == "101") {
          setLoginErr("Email and password are required");
        }
      });
    });
    // console.log("---");
    console.log(userData);
    // console.log("---");
  };

  return (
    <div style={{ marginTop: "70px" }}>
      <div className="raisedbox">
        <div style={{ textAlign: "center" }}>Client Login</div>
        <form
          className="fl-login-form-box"
          noValidate
          method="POST"
          onSubmit={handleLoginForm}
        >
          <label>
            Email:
            <input
              type="email"
              name="email"
              className="fl-login-input"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              className="fl-login-input"
              onChange={handleChange}
              required
            />
          </label>
          <span>{loginErr ? loginErr : ""}</span>
          <button
            type="submit"
            // onClick={(e) => {
            //   e.preventDefault();
            //   dispatch(loginUser(state));
            // }}
          >
            Login
          </button>
        </form>
        <div>
          Don't have an account,<Link to="/clUser/signup">click here</Link>.
        </div>
      </div>
    </div>
  );
}

export default CLLogin;
