import React, { useState, useEffect, useRef } from "react";
import "./cl-signup.css";
import { Link, useParams } from "react-router-dom";
import { loginUser } from "../../../redux/actions/clientsActions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserData,
  returnState,
} from "../../../redux/actions/userActions/userActions";
import axios from "axios";

import Moment from "moment";

function CLMemberInfo() {
  const dispatch = useDispatch();
  const profilePIcc =
    "https://cdn.icon-icons.com/icons2/2550/PNG/512/plus_icon_152556.png";
  const [countries, setCountry] = useState([]);
  const [state, setState] = useState({
    img: "",
    bio: "",
    country: "",
    years_of_exp: "",
    role: "",
    gender: "",
  });
  const [errorsObj, setFormError] = useState({});
  const [image_loaded, setLoaded] = useState(false);
  //Other Client Info
  const [dob, setDob] = useState("");
  const [profileImage, setProfileImage] = useState({});
  // const [resumeFile, setResume] = useState({});

  //Main Popup
  const [showMain, setShowMain] = useState(false);
  const handleMainClose = () => setShowMain(false);
  const handlMainShow = () => setShowMain(true);

  //Company Popup
  const [showRequest, setShowRequest] = useState(false);
  const handleRequestClose = () => setShowRequest(false);
  const handlRequestShow = () => setShowRequest(true);

  let userData = useSelector((state) => state);
  console.log("State of redux in cl memeber", userData);
  // const fileInputRef = useRef();
  // const profileImageRef = useRef();

  const handleChange = (e) => {
    e.persist();
    setState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
    console.log(state);
  };
  const handleProfilePic = (e) => {
    setProfileImage(e.target.files[0]);
    console.log(e.target.files[0].name);
    setLoaded(true);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("bio", state.bio);
    // formData.append("attachment", resumeFile);
    formData.append("experience", state.years_of_exp);
    formData.append("role", state.role);
    formData.append("dob", Moment(dob).format("YYYY/MM/DD"));
    formData.append("gender", state.gender);
    formData.append("image", profileImage);
    formData.append("country", state.country);
    // formData.append("user_id", userData.credentials.data[0].id);
    console.log(userData);
    //Loging the data on the console
    // console.log("** Start of log **");
    // console.log("experience", state.years_of_exp);
    // console.log("role", state.role);
    // console.log("dob", Moment(dob).format("YYYY/MM/DD"));
    // console.log("gender", state.gender);
    // console.log("image", profileImage);
    // console.log("country", state.country);
    // console.log("user_id", userData.credentials.data[0].id);
    // console.log("** End of log **");
    // axios.get("/sanctum/csrf-cookie").then((response) => {
    //   axios.post("/api/addClientInfo", formData).then((response) => {
    //     console.log(response);
    //     // if (response.data.data.status === "200") {
    //     //   console.log(response.data.data);
    //     //   dispatch(
    //     //     getUserData(
    //     //       response.data.data.userToken,
    //     //       response.data.data.user_id,
    //     //       1
    //     //     )
    //     //   );
    //     //   // window.location.href = "/flUser/dashboard";
    //     // } else if (response.data.data.status === "422") {
    //     //   console.log("Error");
    //     // }
    //   });
    // });
  };

  // console.log(countries.data);
  useEffect(() => {
    const abort = new AbortController();

    fetch("https://countriesnow.space/api/v0.1/countries/capital")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setCountry(data.data);
      });

    return () => abort.abort();
  }, []);
  let key = 0;
  const defaultImg =
    "https://cdn.icon-icons.com/icons2/2550/PNG/512/plus_icon_152556.png";

  const MainPopup = (
    <>
      <Button type="submit" variant="primary" onClick={handlMainShow}>
        Show modal
      </Button>
      <Modal show={showMain} onHide={handleMainClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Freelancers Login</Modal.Title> */}
        </Modal.Header>
        <div className="af-choice-box-row">
          <Button
            className="af-choice-box"
            onClick={() => {
              handleMainClose();
              handlRequestShow();
            }}
          >
            I'm an employee in a company
          </Button>
          <Button
            className="af-choice-box"
            component={Link}
            to="/clUser/Dashbaord"
          >
            Go to Dashboard
          </Button>
          <Button
            className="af-choice-box"
            component={Link}
            to="/clUser/Create-Company"
          >
            Create a company
          </Button>
        </div>
      </Modal>

      <Modal show={showRequest} onHide={handleRequestClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Company Code</Modal.Title>
        </Modal.Header>
        <form className="agency-popup-form">
          <label>
            Company Code:
            <input
              type="text"
              name="agencyname"
              className="agency-popup-input"
              onChange={handleChange}
            />
          </label>
          <Button
            type="submit"
            onClick={(e) => {
              console.log(e.target.value);
            }}
          >
            Submit
          </Button>
        </form>
      </Modal>
    </>
  );

  return (
    <Container>
      <div className="form-box">
        <form onSubmit={HandleSubmit}>
          <Row>
            <Col>
              <div>
                <label>
                  Upload Image:
                  {/* <Button onClick={() => profileImageRef.current.click()}>
                    Upload
                  </Button> */}
                </label>
                <img
                  src={
                    image_loaded
                      ? URL.createObjectURL(profileImage)
                      : defaultImg
                  }
                />
                <input
                  type="file"
                  // ref={profileImageRef}
                  className="profile-picture"
                  name="img"
                  onChange={handleProfilePic}
                />

                <ul>{errorsObj.image ? setFormError(errorsObj.image) : ""}</ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <label>
                Date of Birth:
                <DatePicker selected={dob} onChange={(date) => setDob(date)} />
              </label>
            </Col>
            <Col>
              <label>
                Gender:
                <div onChange={handleChange}>
                  <input type="radio" value="m" name="gender" /> Male
                  <input type="radio" value="f" name="gender" /> Female
                </div>
              </label>
            </Col>
          </Row>

          <Row>
            <Col>
              <label>Bio</label>
              <input
                type="text"
                className=""
                name="bio"
                onChange={handleChange}
              ></input>
              <ul>{errorsObj.bio ? setFormError(errorsObj.bio) : ""}</ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <label>Country</label>
              <select name="country" onChange={handleChange}>
                {countries.map((collection) => (
                  <option value={collection.id}> {collection.name}</option>
                ))}
              </select>
              <ul>
                {errorsObj.country ? setFormError(errorsObj.country) : ""}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <label>Years of experience</label>
              <input
                type="number"
                className=""
                name="years_of_exp"
                onChange={handleChange}
              ></input>
              <ul>
                {errorsObj.experience ? setFormError(errorsObj.experience) : ""}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <label>How do you describe your role?</label>
              <input
                type="text"
                className=""
                name="role"
                onChange={handleChange}
              ></input>
              <ul>{errorsObj.role ? setFormError(errorsObj.role) : ""}</ul>
            </Col>
          </Row>
          {/* <Row>
            <Col>
              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  name="attachment"
                  onChange={(e) => setResume(e.target.files[0])}
                  style={{ display: "none" }}
                />
                <label>
                  Upload Resume:
                  <Button onClick={() => fileInputRef.current.click()}>
                    Upload
                  </Button>
                </label>
                <ul>
                  {errorsObj.attachment
                    ? setFormError(errorsObj.attachment)
                    : ""}
                </ul>
              </div>
            </Col>
          </Row> */}
          <Button type="submit" variant="primary" onClick={HandleSubmit}>
            Sumbit
          </Button>
          {MainPopup}
        </form>
      </div>
    </Container>
  );
}
const mapStateToProps = (state) => ({});

// const mapDispatchToProps = { loginUser };

export default CLMemberInfo;
