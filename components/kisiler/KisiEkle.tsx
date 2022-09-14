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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22px"
          height="22px"
          fill="currentColor"
          className="bi bi-person-plus"
          viewBox="0 0 16 16"
        >
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          <path
            fillRule="evenodd"
            d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
          />
        </svg>
        <span>Yeni kişi ekle</span>
      </Button>

      {/* kişi ekleme sayfası */}
      <Offcanvas style={{ width: "100vw", height: "100vh" }} show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <h5>Kişi Ekle</h5>
        </Offcanvas.Header>

        <Offcanvas.Body className={styles["off-body"]}>
          {/* ekleme formu */}
          <Suspense fallback={<Spinner animation="border" />}>
            <DKisiEkleForm handleClose={handleClose} />
          </Suspense>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default KisiEkle;
