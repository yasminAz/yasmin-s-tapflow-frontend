import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import React, { useState } from "react";
function ContinueModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Submit
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body>
          <Link to="/clUser/Dashbaord">
            <Button variant="secondary" onClick={handleClose}>
              Continue To Dashboard
            </Button>
          </Link>
          <Link to="/clUser/Start-Project">
            <Button variant="primary">Start a project</Button>
          </Link>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ContinueModal;
