import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SkillSelector from "../../../components/skills-selector/skills-selector";
import "./profile-setup.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Button } from "react-bootstrap";
import moment from "moment";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../../redux/actions/userActions/userActions";

export const FlProfileSetup = (props) => {
  const [state, setState] = useState({
    country: "",
    yearsOfExperience: "",
    gender: "",
    selfDescription: "",
    hourly_rate: null,
    skills: [],
  });

  const [errorsObj, setFormError] = useState({});
  const dispatch = useDispatch();

  //Other Form Info
  const [dob, setDob] = useState("");
  const [profileImage, setProfileImage] = useState({});
  const [resumeFile, setResume] = useState({});

  //Main Popup
  const [showMain, setShowMain] = useState(false);
  const handleMainClose = () => setShowMain(false);
  const handlMainShow = () => setShowMain(true);

  //Agency Popup
  const [showRequest, setShowRequest] = useState(false);
  const handleRequestClose = () => setShowRequest(false);
  const handlRequestShow = () => setShowRequest(true);

  const userData = useSelector((state) => state.User);
  console.log(userData);
  const fileInputRef = useRef();
  const profileImageRef = useRef();

  const settingSkills = (skillList) => {
    setState((prevState) => {
      return { ...prevState, skills: skillList };
    });
  };

  const handleChange = (e) => {
    e.persist();
    setState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleParagraphChange = (e) => {
    e.persist();
    setState((prevState) => {
      return {
        ...prevState,
        selfDescription: e.target.value.split("\\n").join("\n"),
      };
    });
  };

  const handleProfileSetupForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("bio", state.selfDescription);
    formData.append("hourly_rate", state.hourly_rate);
    formData.append("attachment", resumeFile);
    formData.append("experience", state.yearsOfExperience);
    formData.append("dob", moment(dob).format("YYYY/MM/DD"));
    formData.append("gender", state.gender);
    formData.append("image", profileImage);
    formData.append("country", state.country);
    formData.append("categories", state.skills);
    formData.append("role", "frontend dev");
    formData.append("user_id", userData.credentials.id);
    formData.append("links", ["naser.com"]);

    console.log(userData);

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post("/api/addFreelancerInfo", formData).then((response) => {
        console.log(response);
        if (response.data.status.code === 200) {
          handlMainShow();
          dispatch(
            getUserData(userData.credentials.token, userData.credentials.id, 1)
          );
          // window.location.href = "/flUser/dashboard";
        } else if (response.data.status.code === 101) {
          setFormError(response.data.data.error);
        }
      });
    });
  };

  console.log(userData);

  const MainPopup = (
    <>
      <button
        type="submit"
        variant="primary"
        //  onClick={handlMainShow}
      >
        Sumbit
      </button>
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
            I'm an employee of an agency
          </Button>
          <Button
            className="af-choice-box"
            component={Link}
            to="/flUser/dashboard"
          >
            Go to Dashboard
          </Button>
          <Link to="/flUser/agency-setup">
            <Button className="af-choice-box">Create an Agency</Button>
          </Link>
        </div>
      </Modal>

      <Modal show={showRequest} onHide={handleRequestClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Agency Code</Modal.Title>
        </Modal.Header>
        <form className="agency-popup-form">
          <label>
            Agency Code:
            <input
              type="text"
              name="agencyname"
              className="agency-popup-input"
              onChange={handleChange}
            />
          </label>
          <Button
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
    <div className="profile-setup-container">
      <form
        className="fl-profile-form-box"
        noValidate
        method="POST"
        onSubmit={handleProfileSetupForm}
      >
        <div className="profile-setup-input-row">
          <div>
            <input
              type="file"
              ref={profileImageRef}
              name="image"
              onChange={(e) => setProfileImage(e.target.files[0])}
              style={{ display: "none" }}
            />
            <label>
              Upload Image:
              <Button onClick={() => profileImageRef.current.click()}>
                Upload
              </Button>
            </label>
            <ul>{errorsObj.image ? setFormError(errorsObj.image) : ""}</ul>
          </div>
          <label>
            country:
            <input
              type="text"
              name="country"
              className="fl-profile-input"
              onChange={handleChange}
            />
            <ul>{errorsObj.country ? errorsObj.country : ""}</ul>
          </label>
        </div>
        <div className="profile-setup-input-row">
          <label>
            years of experience:
            <input
              type="number"
              name="yearsOfExperience"
              className="fl-profile-input"
              onChange={handleChange}
            />
            <ul>
              {errorsObj.experience ? setFormError(errorsObj.experience) : ""}
            </ul>
          </label>
          <label>
            hourly rate:
            <input
              type="number"
              name="hourly_rate"
              className="fl-profile-input"
              onChange={handleChange}
            />
            <ul>
              {errorsObj.hourly_rate ? setFormError(errorsObj.hourly_rate) : ""}
            </ul>
          </label>
          <label>
            Date of Birth:
            <DatePicker selected={dob} onChange={(date) => setDob(date)} />
          </label>
        </div>
        <div className="profile-setup-input-row">
          <label>
            Gender:
            <div onChange={handleChange}>
              <input type="radio" value="m" name="gender" /> Male
              <input type="radio" value="f" name="gender" /> Female
            </div>
          </label>
        </div>
        <ul>{errorsObj.category ? setFormError(errorsObj.category) : ""}</ul>
        <SkillSelector settingSkills={settingSkills} />

        <label>
          Tell us about yourself:
          <textarea
            rows={10}
            type="text"
            name="selfDescription"
            className="fl-profile-textarea"
            onChange={handleParagraphChange}
          />
          <ul>{errorsObj.bio ? errorsObj.bio : ""}</ul>
        </label>
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
            <Button onClick={() => fileInputRef.current.click()}>Upload</Button>
          </label>
          <ul>
            {errorsObj.attachment ? setFormError(errorsObj.attachment) : ""}
          </ul>
        </div>
        <br />
        {MainPopup}
      </form>
    </div>
  );
};

export default FlProfileSetup;
