import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { kayitSil } from "../../cms/setup";
import type { KisiKayitSilModalProps } from "../../types/types";

const KisiKayitSilModal = ({ kisi }: KisiKayitSilModalProps) => {
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
          <Modal.Title>Kayıt silinsin mi ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bu kayıt silinecek</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleCloseModal}>
            İptal
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => {
              kayitSil(kisi);
              handleCloseModal();
            }}
          >
            Sil
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default KisiKayitSilModal;
