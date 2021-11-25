import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { signupUser } from "../../../redux/actions/clientsActions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../../redux/actions/userActions/userActions";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

function CLSignup() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
    type: 2,
  });

  const [errorState, setErrorMsg] = useState({
    fn: "",
    ln: "",
    email: "",
    pass: "",
    confpass: "",
  });
  const handleValidation = () => {
    //let fields = this.state.fields;
    const { fname, lname, email, pass, confpass } = state;
    let errors = {};
    let formIsValid = true;
    //Offer Name Validation
    if (fname == "") {
      formIsValid = false;
      errors["fname"] = "Cannot be empty";
    }
    //Offer Description Validation
    if (lname == "") {
      formIsValid = false;
      errors["lname"] = "Cannot be empty";
    }
    //Offer Points Validation
    if (email == "") {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }
    //Offer Image Validation
    if (pass == "") {
      formIsValid = false;
      errors["pass"] = "Cannot be empty";
    }
    if (confpass == "") {
      formIsValid = false;
      errors["confpass"] = "Cannot be empty";
    }
    if (confpass != pass) {
      formIsValid = false;
      errors["passwordMatch"] = "Passwords don't match!";
    }
    setState({ errors: errors });
    console.log(state);
    return formIsValid;
  };

  const dispatch = useDispatch();

  const UserDATA = useSelector((state) => state);
  const handleChange = (e) => {
    e.persist();
    setState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = () => {
    if (state.confirmPassword === state.password) {
      setErrorMsg((prevState) => {
        return { ...prevState, confpass: "" };
      });
      console.log("passwords match");
      const formData = new FormData();
      // Update the formData object
      formData.append("first_name", state.firstName);
      formData.append("last_name", state.lastName);
      formData.append("email", state.emailAddress);
      formData.append("password", state.password);
      formData.append("type", 2);
      // formData.append("gender", "");
      // formData.append("country", "");

      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios.post("/api/addUser", formData).then((response) => {
          console.log(response);
          // This is extra code to test
          let api_resp = response.data;
          console.log("*****");
          console.log(api_resp.status.code);
          console.log("*****");
          if (api_resp.status.code == "200") {
            console.log(
              api_resp.data.userToken,
              api_resp.data.user_id,
              api_resp.data.user_type
            );
            localStorage.clear();
            dispatch(
              getUserData(
                api_resp.data.userToken,
                api_resp.data.user_id,
                api_resp.data.user_type
              )
            );
            console.log("this is from useSelect", UserDATA);
            console.log(
              "this is the state from local storage",
              localStorage.getItem("state")
            );
            // window.location = `/clUser/signup/memberInfo`;
          } else {
            let errors = api_resp.data;
            if (errors.first_name) {
              console.log("first name error");
              let errors_group = "";
              errors.first_name.forEach(
                (element) => (errors_group = errors_group + element + " ")
              );
              console.log(errors_group);
              setErrorMsg((prevState) => {
                return { ...prevState, fn: errors_group };
              });
            }
            if (errors.last_name) {
              console.log("last name error");
              let errors_group = "";
              errors.last_name.forEach(
                (element) => (errors_group = errors_group + element + " ")
              );
              console.log(errors_group);
              setErrorMsg((prevState) => {
                return { ...prevState, ln: errors_group };
              });
            }
            if (errors.email) {
              console.log("email error");
              let errors_group = "";
              errors.email.forEach(
                (element) => (errors_group = errors_group + element + " ")
              );
              console.log(errors_group);
              setErrorMsg((prevState) => {
                return { ...prevState, email: errors_group };
              });
            }
            if (errors.password) {
              console.log("password error");
              let errors_group = "";
              errors.password.forEach(
                (element) => (errors_group = errors_group + element + " ")
              );
              console.log(errors_group);
              setErrorMsg((prevState) => {
                return { ...prevState, pass: errors_group };
              });
            }

            // console.log(api_resp.data.error.email);
            // let errors = api_resp.data.error;
            // console.log(errors.type());
            // api_resp.data.error.forEach((element) => console.log(element));
          }
          // end of extra code
        });

        console.log("axios request sent");
      });
      // axios.get("/sanctum/csrf-cookie").then((response) => {
      //   axios
      //     .get("api/getAllUsers")
      //     .then((response) => console.log(response.data));
      //   console.log("axios request sent");
      // });

      // window.location = "/clUser/signup/memberInfo";
    } else {
      console.log("Password doesn't match!");
      setErrorMsg((prevState) => {
        return { ...prevState, confpass: "Password doesn't match!" };
      });
    }

    // axios
    //   .get("https://tapflow-backend-3ec55.ondigitalocean.app/api/getCategories")
    //   .then((response) => console.log(response.data));
  };

  return (
    <div style={{ marginTop: "70px" }}>
      <div className="raisedbox">
        <div>Clients Signup</div>
        <form className="fl-login-form-box">
          <label>
            First Name:<span> {errorState.fn} </span>
            <input
              type="text"
              name="firstName"
              className="fl-signup-input"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Last Name:<span> {errorState.ln} </span>
            <input
              type="text"
              name="lastName"
              className="fl-signup-input"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email: <span id="emailErrors"> {errorState.email} </span>
            <input
              type="email"
              name="emailAddress"
              className="fl-signup-input"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Password:<span> {errorState.pass} </span>
            <input
              type="password"
              name="password"
              className="fl-signup-input"
              onChange={handleChange}
              required
              minLength="8"
            />
          </label>
          <label>
            Confirm Password: <span> {errorState.confpass} </span>
            <input
              type="password"
              name="confirmPassword"
              className="fl-signup-input"
              onChange={handleChange}
              required
              minLength="8"
            />
          </label>
          <Link to="/clUser/signup/memberInfo">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              Sign Up
              {/* <Link to="/clUser/signup/memberInfo">Continue</Link> */}
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { signupUser };

export default connect(mapStateToProps, mapDispatchToProps)(CLSignup);

///////////////////////////////
// handleValidation() {
//     //let fields = this.state.fields;
//     const { fname, lname, email, pass, confpass } = state;
//     let errors = {};
//     let formIsValid = true;
//     //Offer Name Validation
//     if (!fname) {
//       formIsValid = false;
//       errors["fname"] = "Cannot be empty";
//     }
//     //Offer Description Validation
//     if (!lname) {
//       formIsValid = false;
//       errors["lname"] = "Cannot be empty";
//     }
//     //Offer Points Validation
//     if (!email) {
//       formIsValid = false;
//       errors["email"] = "Cannot be empty";
//     }
//     //Offer Image Validation
//     if (!pass) {
//       formIsValid = false;
//       errors["pass"] = "Cannot be empty";
//     }
//     if (!confpass) {
//       formIsValid = false;
//       errors["confpass"] = "Cannot be empty";
//     }
//     if (confpass != pass) {
//       formIsValid = false;
//       errors["passwordMatch"] = "Passwords don't match!";
//     }
//     setState({ errors: errors });
//     return formIsValid;
//   }
//   componentWillReceiveProps(nextProps) {
//     if (nextProps.UI.errors) {
//       this.setState({ errors: nextProps.UI.errors });
//     }
//   }
//   sendingDataApi(storename) {
//     const storeId = localStorage.StoreId;
//     const offerId = uuid();
//     let newOffer = {
//       offername: this.state.offername,
//       offerpoints: this.state.offerpoints,
//       offerdesc: this.state.offerdesc,
//       offerId: offerId,
//       image: {
//         url: "",
//         id: "",
//       },
//       storeInfo: {
//         name: storename,
//         id: storeId,
//       },
//     };
//     const data = JSON.stringify(newOffer);
//     const formData = new FormData();
//     formData.append("offerimg", this.state.offerimg);
//     formData.append("offerdata", data);
//     const requestOptions = {
//       method: "POST",
//       body: formData,
//     };
//     fetch("/api/add-offer", requestOptions)
//       .then((response) => {
//         console.log(response);
//         return response;
//       })
//       .then((json) => {
//         console.log(json);
//         window.location = "/all-offers";
//         return json;
//       })
//       .catch((error) => console.log(error));
//   }
//   handleSubmit = async (event) => {
//     event.preventDefault();
//     this.setState({ loading: true });
//     //console.log(this.state.offerimg);
//     if (this.handleValidation()) {
//       alert("Form submitted");
//     } else {
//       alert("Form has errors.");
//     }
//     const userData = localStorage.StoreData;
//     let userDataobj = JSON.parse(userData);
//     let storename = userDataobj["storename"];
//     this.sendingDataApi(storename);
//   };
