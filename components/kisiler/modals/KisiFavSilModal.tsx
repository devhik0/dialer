import { favSil } from "@cms/setup";
import type { Kisi } from "@features/apiSlice";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const KisiFavSilModal = ({ kisi }: { kisi: Kisi }) => {
  // modal state i
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <Button onClick={handleShowModal} variant="outline-danger">
        Sil
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>Favori silinsin mi ?</Modal.Title>
        </Modal.Header>

        <Modal.Body>Bu kişi favorilerden silinecek</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleCloseModal}>
            İptal
          </Button>

          <Button
            variant="outline-danger"
            onClick={() => {
              handleCloseModal();
              alert("Favori silindi !");
              favSil(kisi);
            }}
          >
            Sil
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default KisiFavSilModal;
