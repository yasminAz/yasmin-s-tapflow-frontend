import React, { useState } from "react";
import "./agencyPopup.css";
import { useDispatch, useSelector } from "react-redux";
import { hideBackDrop } from "../../../../redux/actions/uiActions";

function AgencyPopup() {
  const [agencyname, setAgencyName] = useState("");
  const handleChange = (e) => {
    e.persist();
    setAgencyName(e.target.value);
  };
  const UI = useSelector((state) => state.UI);
  const dispatch = useDispatch();
  let display = UI.backdrop ? "agency-popup-box" : "agency-popup-hide";
  return (
    <div className={display}>
      <form className="agency-popup-form">
        <label>
          Agency Name:
          <input
            type="text"
            name="agencyname"
            className="agency-popup-input"
            onChange={handleChange}
          />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(hideBackDrop());
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AgencyPopup;
