import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { clientM } from "../../cms/setup";
import styles from "../../styles/scss/modules/kisiler/KisiKayit.module.css";
import { KisiKayitProps } from "../../types/types";
import KisiAvatar from "./KisiAvatar";

const KisiKayit = ({ kisiler }: KisiKayitProps) => {
  // modal state i
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      {kisiler.map((kisi) => {
        const { adsoyad } = kisi.fields;

        const handleDelete = () => {
          const kisiDuzenle = async () => {
            clientM
              .getSpace(process.env.C_SPC_ID || "")
              .then((space) => space.getEnvironment("master"))
              .then((environment) => environment.getEntry(kisi.sys.id))
              .then((entry) => {
                entry.fields = {
                  ...entry.fields,
                  iscalled: { "en-US": false },
                };
                return entry.update();
              })
              .then((entry) => {
                entry.publish();
                // console.log(`Entry ${entry.sys.id} updated.`);
              })
              .catch(console.error);
          };
          kisiDuzenle();
        };

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
                        handleDelete();
                        handleCloseModal();
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
      })}
    </>
  );
};

export default KisiKayit;
