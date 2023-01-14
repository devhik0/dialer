import Router from "next/router";

import { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { kisiSil } from "../../cms/setup";

import { Kisi } from "../../features/api/apiSlice";

const KisiSilModal = ({ kisi }: { kisi: Kisi }) => {
  // modal state i
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleDelete = () => {
    kisiSil(kisi);
    alert("Kişi Silindi !");
    Router.push("/son");
    handleCloseModal();
  };

  return (
    <>
      <Button onClick={handleShowModal} variant="outline-danger">
        <i className="bi bi-trash"></i>
        <span>Sil</span>
      </Button>

      {/* silme modalı */}
      <Modal style={{ top: "65%" }} show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>Kişi silinsin mi ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bu kişi silinecek</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleCloseModal}>
            İptal
          </Button>
          <Button variant="outline-danger" onClick={handleDelete}>
            Sil
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default KisiSilModal;
