import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { favSil } from "../../cms/setup";
import styles from "../../styles/scss/modules/kisiler/KisiFav.module.css";
import { KisiFavProps } from "../../types/types";
import KisiAvatar from "./KisiAvatar";

const KisiFav = ({ kisi }: KisiFavProps) => {
  const { adsoyad } = kisi.fields;

  // modal state i
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <Card key={kisi.sys.id} className={styles["kisi-container"]}>
      <Card.Body className={styles["kisi-container-col"]}>
        <KisiAvatar kisi={kisi} />
        <span>{adsoyad}</span>
        <div className={styles.delete}>
          <Button onClick={handleShowModal} variant="outline-danger">
            Sil
          </Button>
          <Modal className={styles["delete-modal"]} show={showModal} onHide={handleCloseModal}>
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
        </div>
      </Card.Body>
    </Card>
  );
};

export default KisiFav;
