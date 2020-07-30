import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ModalDelete = (props) => {
  const [modal, setModal] = useState(false);
  const { id, onPhotoRemoveClick } = props;

  const toggle = () => setModal(!modal);

  toast.configure({
    autoClose: 3000,
    draggable: false,
    position: toast.POSITION.TOP_RIGHT,
  });

  const notify = () =>
    setTimeout(() => {
      toast.success("Delete photo successful !");
    }, 500);

  return (
    <div>
      <Button outline color="danger" onClick={toggle}>
        Delete
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delete photo</ModalHeader>
        <ModalBody>Are you sure ?</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button
            color="danger"
            onClick={() => {
              onPhotoRemoveClick(id);
              toggle();
              notify();
            }}
          >
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalDelete;
