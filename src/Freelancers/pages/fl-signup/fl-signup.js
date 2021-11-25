import React, { useState } from "react";
import "./fl-signup.css";
import { connect } from "react-redux";
import { signupUser } from "../../../redux/actions/freelancersActions/userActions";
import { getUserData } from "../../../redux/actions/userActions/userActions";
import { useDispatch } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { FiArrowRight, FiX } from "react-icons/fi";
import { Container, Row, Col } from "react-bootstrap";
import { BiCaretRight } from "react-icons/bi";

function FLSignup() {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [loginErr, setLoginErr] = useState(false);
  const [errorsObj, setErrors] = useState({});
  const [confPassErr, setConfPassErr] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.persist();
    setState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const setFormError = (obj) => {
    return obj.map((err) => {
      return <li>{err}</li>;
    });
  };

  const confPass = () => {
    if (state.password !== state.confirm_password) {
      setConfPassErr(["password doesn't match"]);
    }
  };

  const handleSignupForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("first_name", state.first_name);
    formData.append("last_name", state.last_name);
    formData.append("email", state.email);
    formData.append("password", state.password);
    // formData.append("first_name", "naser");
    // formData.append("last_name", "k");
    // formData.append("email", "n4@email.com");
    formData.append("password", "123456789");
    formData.append("type", 1);
    formData.append("gender", "");
    formData.append("country", "");

    const loginFormData = new FormData();
    loginFormData.append("email", state.email);
    loginFormData.append("password", state.password);

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post("/api/addUser", formData)
        .then((response) => {
          console.log(response);
          if (response.data.status.code === 200) {
            axios.post("/api/Login", loginFormData).then((res) => {
              console.log(res.data);
              dispatch(
                getUserData(res.data.data.userToken, res.data.data.user_id, 1)
              );
              window.location.href = "/flUser/profile-setup";
            });
          } else if (response.data.status.code === 101) {
            confPass();
            setErrors(response.data.data);
          } else if (response.data.status.code === 422) {
            setLoginErr(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <form
      className="fl-login-form-box"
      noValidate
      method="POST"
      onSubmit={handleSignupForm}
    >
      <Row className="form-inputs-spacing">
        <Col sm={{ span: 12 }} lg={{ span: 6 }} className="Centered">
          <input
            type="text"
            label="first name"
            name="first_name"
            className="fl-signup-input"
            placeholder="First name"
            onChange={handleChange}
          />
          <ul>
            {errorsObj.first_name ? setFormError(errorsObj.first_name) : ""}
          </ul>
        </Col>
        <Col sm={{ span: 12 }} lg={{ span: 6 }} className="Centered">
          <input
            type="text"
            name="last_name"
            label="last name"
            className="fl-signup-input"
            placeholder="Last name"
            onChange={handleChange}
          />
          <ul>
            {errorsObj.last_name ? setFormError(errorsObj.last_name) : ""}
          </ul>
        </Col>
        <Col sm={{ span: 12 }} lg={{ span: 6 }} className="Centered">
          <input
            type="email"
            name="email"
            label="email"
            placeholder="Email"
            className="fl-signup-input"
            onChange={handleChange}
          />
          <ul>{errorsObj.email ? setFormError(errorsObj.email) : ""}</ul>
        </Col>
        <Col sm={{ span: 12 }} lg={{ span: 6 }} className="Centered">
          <input
            type="password"
            name="password"
            label="password"
            className="fl-signup-input"
            onChange={handleChange}
            placeholder="Password"
          />
          <ul>{errorsObj.password ? setFormError(errorsObj.password) : ""}</ul>
        </Col>
        <Col sm={{ span: 12 }} lg={{ span: 6 }} className="Centered">
          <input
            type="password"
            name="confirm_password"
            className="fl-signup-input"
            onChange={handleChange}
            placeholder="Confirm password"
          />
          <ul>{confPassErr ? setFormError(confPassErr) : ""}</ul>
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { signupUser };

export default connect(mapStateToProps, mapDispatchToProps)(FLSignup);
