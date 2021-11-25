import React, { useState, useEffect, useRef } from "react";
import "./cl-create.css";
import { Link, useParams } from "react-router-dom";
import { loginUser } from "../../../redux/actions/clientsActions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "./useFetch";
import ContinueModal from "./continue-modal";
import axios from "axios";

function CLCreate() {
  const [countries, setCountry] = useState([]);
  const [state, setState] = useState({
    companyLogo: "",
    companyName: "",
    companyCountry: "",
    companyWebsite: "",
    companyType: "",
    companyBio: "",
    companyPortifolio: "",
    numOfCompEmp: "",
  });
  // const dispatch = useDispatch();
  const [files, setFiles] = useState({
    imageFile: null,
    portfolioFile: null,
  });
  const onFileChange = (e) => {
    e.persist();
    setFiles((prevState) => {
      return { ...prevState, [e.target.name]: e.target.files[0] };
    });
  };
  const [errorsObj, setFormError] = useState({});

  // const [companyLogo, setCompanyLogo] = useState({});
  // const [portfolioFile, setPortfolio] = useState({});

  const userData = useSelector((state) => state.User);
  const fileInputRef = useRef();
  const logoRef = useRef();
  // let { admin_id } = useParams();
  const handleChange = (e) => {
    e.persist();
    setState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
    console.log(state);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", state.companyName);
    formData.append("admin_id", 53);
    formData.append("bio", state.companyBio);
    formData.append("attachment", files.portfolioFile);
    formData.append("link", state.companyWebsite);
    formData.append("employees_number", state.numOfCompEmp);
    formData.append("image", files.imageFile);
    formData.append("country", state.companyCountry);
    formData.append("field", state.companyType);

    console.log(state);
    console.log(files);

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post("/api/addCompany", formData).then((response) => {
        console.log(response);
        // if (response.data.data.status === "200") {
        //   console.log(response.data.data);
        //   // dispatch(
        //   //   getUserData(
        //   //     response.data.data.userToken,
        //   //     response.data.data.user_id,
        //   //     1
        //   //   )
        //   // );

        // } else if (response.data.data.status === "422") {
        //   setLoginErr(true);
        // }
      });
    });
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

  // const url = "http://localhost:3001/articles";
  // const { data, isPending, errorr } = useFetch(url);
  return (
    <Container>
      <div className="form-box">
        <form onSubmit={HandleSubmit}>
          <Row className="Page-sectioner">
            <Col className="Left">
              <Row>
                <Col>
                  <input type="file" name="imageFile" onChange={onFileChange} />
                  <label>Upload Company Logo:</label>
                  <ul>
                    {errorsObj.image ? setFormError(errorsObj.image) : ""}
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label>Company Name</label>
                  <input
                    type="text"
                    className=""
                    placeholder="Company Name"
                    name="companyName"
                    onChange={handleChange}
                  ></input>
                  <ul>{errorsObj.name ? setFormError(errorsObj.name) : ""}</ul>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label>Bio</label>
                  <input
                    type="text"
                    className=""
                    name="companyBio"
                    onChange={handleChange}
                  ></input>
                  <ul>{errorsObj.bio ? setFormError(errorsObj.bio) : ""}</ul>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label>Company Type</label>
                  <input
                    type="text"
                    className=""
                    name="companyType"
                    onChange={handleChange}
                  ></input>
                  <ul>
                    {errorsObj.field ? setFormError(errorsObj.field) : ""}
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label>Website</label>
                  <input
                    type="text"
                    className=""
                    name="companyWebsite"
                    onChange={handleChange}
                  ></input>
                  <ul>{errorsObj.link ? setFormError(errorsObj.link) : ""}</ul>
                </Col>
              </Row>
            </Col>
            <Col className="Right">
              <Row>
                <Col>
                  <label># of employees</label>
                  <input
                    type="text"
                    className=""
                    name="numOfCompEmp"
                    onChange={handleChange}
                  ></input>
                  <ul>
                    {errorsObj.employees_number
                      ? setFormError(errorsObj.employees_number)
                      : ""}
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label>Country</label>
                  <select name="companyCountry" onChange={handleChange}>
                    {countries.map((collection) => (
                      <option key={collection.id}> {collection.name}</option>
                    ))}
                  </select>
                  <ul>
                    {errorsObj.country ? setFormError(errorsObj.country) : ""}
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col>
                  <input
                    type="file"
                    name="portfolioFile"
                    onChange={onFileChange}
                  />
                  <label>Upload Company Portfolio:</label>
                  <ul>
                    {errorsObj.attachment
                      ? setFormError(errorsObj.attachment)
                      : ""}
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <Button type="submit">submit</Button>
          {/* <Row>
            <Col>
              <ContinueModal />
            </Col>
          </Row> */}
        </form>
      </div>
    </Container>
  );
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = { loginUser };

export default CLCreate;
