import React, { useState } from "react";
import "./fl-login.css";
import { Link, Redirect } from "react-router-dom";
import { getUserData } from "../../../redux/actions/userActions/userActions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { FiArrowRight } from "react-icons/fi";
import { Row, Col } from "react-bootstrap";

function FLLogin() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [loginErr, setLoginErr] = useState(false);

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
        console.log(response.data);
        if (response.data.status.code === 200) {
          console.log(response.data.data);
          dispatch(
            getUserData(
              response.data.data.userToken,
              response.data.data.user_id,
              1
            )
          );
          // window.location.href = "/flUser/main/dashboard";
        } else if (response.data.status.code === 422) {
          setLoginErr(true);
        }
      });
    });
  };

  return (
    <form
      className="fl-login-form-box"
      noValidate
      method="POST"
      onSubmit={handleLoginForm}
    >
      <Row className="form-inputs-spacing">
        <Col sm={{ span: 12 }} lg={{ span: 6 }} className="Centered">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="fl-login-input"
            onChange={handleChange}
            required
          />
        </Col>
        <Col sm={{ span: 12 }} lg={{ span: 6 }} className="Centered">
          <input
            type="password"
            name="password"
            className="fl-login-input"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </Col>
      </Row>

      <span>{loginErr ? "Email or password are wrong" : ""}</span>
      <Row>
        <Col sm={{ span: 12 }}>
          <button
            type="submit"
            className="
                  Submit-button"
          >
            Submit <FiArrowRight />
          </button>
        </Col>
      </Row>
    </form>
  );
}

export default FLLogin;
