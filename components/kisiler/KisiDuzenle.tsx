import { Kisi } from "@features/apiSlice";
import styles from "@styles/kisiler/KisiDuzenle.module.css";
import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas, { OffcanvasProps } from "react-bootstrap/Offcanvas";
import Spinner from "react-bootstrap/Spinner";
import KisiAvatar from "./KisiAvatar";

const DKisiDuzenleForm = dynamic(() => import("./forms/KisiDuzenleForm"), { suspense: true });
const DKisiSilModal = dynamic(() => import("./modals/KisiSilModal"), { suspense: true });

const KisiDuzenle = ({ kisi, ...props }: OffcanvasProps & { kisi: Kisi }) => {
  // offcanvas state i
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Edit button */}
      <Button variant="outline" onClick={handleShow}>
        <i className="bi bi-pencil"></i>
      </Button>

      {/* kişi düzenleme sayfası */}
      <Offcanvas style={{ width: "100%" }} show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <h5>Kişiyi Düzenle</h5>
        </Offcanvas.Header>

        <Offcanvas.Body className={styles["off-body"]}>
          <KisiAvatar kisi={kisi} />
          {/* düzenleme formu */}
          <Suspense fallback={<Spinner animation="border" variant="primary" />}>
            <DKisiDuzenleForm kisi={kisi} handleClose={handleClose} />
          </Suspense>

          <div className={styles.delete}>
            {/* silme modalı */}
            <Suspense fallback={<Spinner animation="border" variant="primary" />}>
              <DKisiSilModal kisi={kisi} />
            </Suspense>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default KisiDuzenle;
