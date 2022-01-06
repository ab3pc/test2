import React from "react";
import { Modal } from "react-bootstrap";
import Forms from "./Forms";

function ModalWindow({ show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Forms handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalWindow;
