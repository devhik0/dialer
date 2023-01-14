import dynamic from "next/dynamic";

import { Suspense, useState } from "react";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Spinner from "react-bootstrap/Spinner";

import styles from "../../styles/scss/modules/kisiler/KisiEkle.module.css";

const DKisiEkleForm = dynamic(() => import("../../components/kisiler/KisiEkleForm"), { suspense: true });

const KisiEkle = ({ ...props }) => {
  // offcanvas state i
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline" onClick={handleShow} className={styles.eklebtn}>
        <i className="bi bi-person-plus"></i>
        <span>Yeni kişi ekle</span>
      </Button>

      {/* kişi ekleme sayfası */}
      <Offcanvas style={{ width: "100vw", height: "100vh" }} show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <h5>Kişi Ekle</h5>
        </Offcanvas.Header>

        <Offcanvas.Body className={styles["off-body"]}>
          {/* ekleme formu */}
          <Suspense fallback={<Spinner animation="border" variant="primary" />}>
            <DKisiEkleForm handleClose={handleClose} />
          </Suspense>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default KisiEkle;
