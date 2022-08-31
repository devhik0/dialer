import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Offcanvas from "react-bootstrap/Offcanvas";
import Spinner from "react-bootstrap/Spinner";
import styles from "../../styles/scss/modules/kisiler/KisiKart.module.css";
import type { KisiKartProps } from "../../types/types";
import CallCanvas from "../layout/CallCanvas";
import KisiAvatar from "./KisiAvatar";
import KisiSecenek from "./KisiSecenek";

const DKisiSilModal = dynamic(() => import("./KisiSilModal"));

const KisiKart = ({ kisi, kisiler, ...props }: KisiKartProps) => {
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
            {kisi.fields.adsoyad} {kisi.fields.tel}
          </span>
        </div>
      </Button>
      {/* kişi bilgileri offcanvas */}
      <Offcanvas style={{ width: "100vw", height: "100vh" }} show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header className={styles.header} closeButton>
          {/* settings paneli */}
          <KisiSecenek kisi={kisi} name={"end"} placement={"end"} />
        </Offcanvas.Header>
        <Offcanvas.Body style={{ padding: "0" }}>
          {/* kişi bilgileri */}
          <div className={styles["kisi-container-col"]}>
            <KisiAvatar kisi={kisi} />
            <h3>{kisi.fields.adsoyad}</h3>
          </div>
          {/* seçenekler kartı */}
          <Card className={styles.options}>
            <Card.Body>
              {/* ara butonu */}
              <CallCanvas kisi={kisi} kisiler={kisiler} />
            </Card.Body>
          </Card>
          {/* iletişim bilgileri kartı */}
          <Card className={styles["info-card"]}>
            <Card.Title as={"h6"}>İletişim bilgileri</Card.Title>
            <Card.Body className={styles.info}>
              {/* call icon */}
              <CallCanvas kisi={kisi} kisiler={kisiler} />
              <span>Mobil {kisi.fields.tel}</span>
            </Card.Body>
          </Card>
          {/* sil butonu */}
          <div className={styles.delete}>
            {/* silme modalı */}
            <Suspense fallback={<Spinner animation="border" />}>
              <DKisiSilModal kisi={kisi} />
            </Suspense>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default KisiKart;
