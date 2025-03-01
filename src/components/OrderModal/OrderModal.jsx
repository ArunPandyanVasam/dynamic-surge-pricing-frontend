import React from "react";
import { Button, Modal } from "react-bootstrap";

const OrderModal = ({show, handleClose, dish}) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title> Enter Your Location </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>{dish.name}</h5>
        <p>
          ⭐ {dish.rating} | ${dish.price}
        </p>
        <input
          type="text"
          placeholder="Enter your city/address"
          className="form-control"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} >
            Cancel
        </Button>
        <Button variant="success">  Get Surge Pricing  </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderModal;
