import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/actions/clientsActions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
function ContinueTo() {
  //   const [countries, setCountry] = useState([]);
  //   const [state, setState] = useState({
  //     img: "",
  //     bio: "",
  //     country: "",
  //     years_of_exp: "",
  //     role: "",
  //   });
  // const dispatch = useDispatch();

  //const handleChange = (e) => {
  //     e.persist();
  //     setState((prevState) => {
  //       return { ...prevState, [e.target.name]: e.target.value };
  //     });
  //     console.log(state);
  //   };

  //   const HandleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(state);
  //   };

  // console.log(countries.data);

  // const url = "http://localhost:3001/articles";
  // const { data, isPending, errorr } = useFetch(url);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Button variant="primary" onClick={handleShow}>
              I'm an employee in a company
            </Button>
            <Link to="/clUser/Create-Company">
              <Button>Create a company</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>None of the above?</p>
            <Link to="/clUser/Dashbaord">
              <Button>Continue to dashboard</Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body>
          <form>
            <Row>
              <Col>
                <p>Enter Company Number</p>
                <input type="text" name="companyID"></input>
                <Button variant="secondary" onClick={handleClose}>
                  Enter
                </Button>
              </Col>
            </Row>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = { loginUser };

export default ContinueTo;
