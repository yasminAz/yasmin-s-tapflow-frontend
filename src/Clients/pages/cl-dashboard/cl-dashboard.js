import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function CLdashboard() {
  const userData = useSelector((state) => state.User);
  console.log(userData);
  console.log(console.log(userData.credentials.data[0].first_name));
  return (
    <div>
      <p>Welcome to the dashboard {userData.credentials.data[0].first_name} </p>
      <p>hi</p>
    </div>
  );
}

export default CLdashboard;
