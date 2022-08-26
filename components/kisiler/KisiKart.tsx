import { useState } from "react";
import { Button, Card, Offcanvas } from "react-bootstrap";
import styles from "../../styles/scss/modules/kisiler/KisiKart.module.css";
import { KisiKartProps } from "../../types/types";
import CallCanvas from "../layout/CallCanvas";
import KisiAvatar from "./KisiAvatar";
import KisiSecenek from "./KisiSecenek";
import KisiSilModal from "./KisiSilModal";

const KisiKart = ({ kisi, kisiler, ...props }: KisiKartProps) => {
  const { adsoyad, tel } = kisi.fields;

  // offcanvas state i
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* kişi kart butonu */}
      <Button onClick={handleShow} variant="outline" className={styles.kisi}>
        <div className={styles["kisi-container"]}>
          <KisiAvatar kisi={kisi} />
          <span style={{ marginLeft: "1rem" }}>
            {adsoyad} {tel}
          </span>
        </div>
      </Button>
      {/* kişi bilgileri offcanvas */}
      <Offcanvas style={{ width: "100vw", height: "100vh" }} show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header className={styles.header}>
          {/* back button */}
          <Button onClick={handleClose} variant="outline" className={styles.back}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </Button>
          {/* settings paneli */}
          <KisiSecenek kisi={kisi} name={"end"} placement={"end"} />
        </Offcanvas.Header>
        <Offcanvas.Body style={{ padding: "0" }}>
          {/* kişi bilgileri */}
          <div className={styles["kisi-container-col"]} key={kisi.sys.id}>
            <KisiAvatar kisi={kisi} />
            <h3>{adsoyad}</h3>
          </div>
          {/* seçenekler kartı */}
          <Card className={styles.options}>
            <Card.Body>
              {/* ara butonu */}
              <CallCanvas kisi={kisi} kisiler={kisiler} />
              {/* mesaj butonu */}
              <Button variant="outline-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-chat-left-text"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                </svg>
                <span>Mesaj gönder</span>
              </Button>
            </Card.Body>
          </Card>
          {/* iletişim bilgileri kartı */}
          <Card className={styles["info-card"]}>
            <Card.Title as={"h6"}>İletişim bilgileri</Card.Title>
            <Card.Body className={styles.info}>
              {/* call icon */}
              <CallCanvas kisi={kisi} kisiler={kisiler} />
              <span>Mobil {tel}</span>
              {/* message icon */}
              <Button variant="outline" className={styles.message} style={{ display: "flex", alignSelf: "end" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-chat-left-text"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                </svg>
              </Button>
            </Card.Body>
          </Card>
          {/* sil butonu */}
          <div className={styles.delete}>
            {/* silme modalı */}
            <KisiSilModal kisi={kisi} />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default KisiKart;
