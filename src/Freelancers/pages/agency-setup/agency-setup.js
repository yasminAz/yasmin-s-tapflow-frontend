import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { SkillSelector } from "../../../components/skills-selector/skills-selector";
import { useDispatch, useSelector } from "react-redux";
import "./agency-setup.css";
import { Button } from "react-bootstrap";
import { getUserData } from "../../../redux/actions/userActions/userActions";
import axios from "axios";

export const AgencySetup = (props) => {
  const [state, setState] = useState({
    agencyName: "",
    location: "",
    num_employees: "",
    agencyDescription: "",
    websiteLink: "",
    skills: "",
  });

  const [errorsObj, setFormError] = useState({});
  const dispatch = useDispatch();

  const [agencyLogo, setAgencyLogo] = useState({});
  const [portfolioFile, setPortfolio] = useState({});

  const userData = useSelector((state) => state.User);
  const fileInputRef = useRef();
  const logoRef = useRef();

  const settingSkills = (skillList) => {
    setState((prevState) => {
      return { ...prevState, skills: skillList };
    });
  };

  //Input Change Handlers
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
        agencyDescription: e.target.value.split("\\n").join("\n"),
      };
    });
  };

  const handleAgencySetupForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", state.agencyName);
    formData.append("bio", state.agencyDescription);
    formData.append("link", state.websiteLink);
    formData.append("attachment", portfolioFile);
    formData.append("num_employees", state.num_employees);
    formData.append("image", agencyLogo);
    formData.append("country", state.location);
    formData.append("categories", state.skills);
    formData.append("hourly_rate", 12);
    formData.append("admin_id", userData.credentials.id);

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post("/api/addTeam", formData).then((response) => {
        console.log(response);
        // window.location.href = "/flUser/main/dashboard";
        if (response.data.status.code === 500) {
          console.log(response.data.data);
          dispatch(
            getUserData(userData.credentials.token, userData.credentials.id, 1)
          );
          // window.location.href = "/flUser/main/dashboard";
        }
        // else if (response.data.status.code === 101) {
        //   setFormError(response.data.data.error);
        // }
      });
    });
  };
  return (
    <div className="profile-setup-container">
      <form
        className="fl-profile-form-box"
        noValidate
        method="POST"
        onSubmit={handleAgencySetupForm}
      >
        <div className="profile-setup-input-row">
          <div>
            <input
              type="file"
              ref={logoRef}
              name="image"
              onChange={(e) => setAgencyLogo(e.target.files[0])}
              style={{ display: "none" }}
            />
            <label>
              Upload Agency Logo:
              <Button onClick={() => logoRef.current.click()}>Upload</Button>
            </label>
            <ul>{errorsObj.image ? setFormError(errorsObj.image) : ""}</ul>
          </div>
          <label>
            Agency Name:
            <input
              type="text"
              name="agencyName"
              className="fl-profile-input"
              onChange={handleChange}
            />
            <ul>{errorsObj.name ? setFormError(errorsObj.image) : ""}</ul>
          </label>
        </div>
        <div className="profile-setup-input-row">
          <label>
            Country:
            <input
              type="text"
              name="location"
              className="fl-profile-input"
              onChange={handleChange}
            />
            <ul>{errorsObj.country ? setFormError(errorsObj.country) : ""}</ul>
          </label>

          <div>
            <label>
              No. of Employees:
              <input
                type="number"
                name="num_employees"
                className="fl-profile-input"
                onChange={handleChange}
              />
            </label>
            <ul>
              {errorsObj.employees_number
                ? setFormError(errorsObj.employees_number)
                : ""}
            </ul>
          </div>

          <label>
            Website Link:
            <input
              type="text"
              name="websiteLink"
              className="fl-profile-input"
              onChange={handleChange}
            />
            <ul>{errorsObj.link ? setFormError(errorsObj.link) : ""}</ul>
          </label>
        </div>
        <br />
        <ul>{errorsObj.catergory ? setFormError(errorsObj.catergory) : ""}</ul>
        <SkillSelector settingSkills={settingSkills} />
        <label>
          Please specify what you're good at:
          <textarea
            rows={10}
            type="text"
            name="agencyDescription"
            className="fl-profile-textarea"
            onChange={handleParagraphChange}
          />
          <ul>{errorsObj.bio ? setFormError(errorsObj.bio) : ""}</ul>
        </label>
        <div>
          <input
            type="file"
            ref={fileInputRef}
            name="image"
            onChange={(e) => setPortfolio(e.target.files[0])}
            style={{ display: "none" }}
          />
          <label>
            Upload Company Portfolio:
            <Button onClick={() => fileInputRef.current.click()}>Upload</Button>
          </label>
          <ul>
            {errorsObj.attachment ? setFormError(errorsObj.attachment) : ""}
          </ul>
        </div>
        <br />

        <button
          type="submit"
          // component={Link} to="/flUser/dashboard"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default AgencySetup;
