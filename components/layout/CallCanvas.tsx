import { kisiAra } from "@cms/setup";
import { Kisi } from "@features/apiSlice";
import styles from "@styles/layout/CallCanvas.module.css";
import KisiAvatar from "components/kisiler/KisiAvatar";
import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas, { OffcanvasProps } from "react-bootstrap/Offcanvas";
import Spinner from "react-bootstrap/Spinner";

const DPads = dynamic(() => import("./Pads"), { suspense: true });

// * Call screen offcanvas
const CallCanvas = ({ kisi, ...props }: OffcanvasProps & { kisi: Kisi }) => {
  const { adsoyad, tel } = kisi.fields;
  // call screen offcanvas state i
  const [showcall, setShowCall] = useState(false);
  const handleShowCall = () => setShowCall(true);
  const handleCloseCall = () => setShowCall(false);

  const handleClick = () => {
    handleShowCall();
    kisiAra(kisi);
  };

  return (
    <>
      <Button onClick={handleClick} variant="outline-primary">
        <i className="bi bi-telephone"></i>
        <span>Ara</span>
      </Button>

      {/* // * Callscreen Offcanvas */}
      <Offcanvas style={{ width: "100vw", height: "100vh" }} show={showcall} onHide={handleCloseCall} {...props}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body className={styles["off-body"]}>
          <KisiAvatar kisi={kisi} />
          <span>Aranıyor...</span>
          <h4>{adsoyad}</h4>
          <h5>{tel}</h5>
          <Suspense fallback={<Spinner animation="border" variant="primary" />}>
            <DPads placement={"bottom"} name={"bottom"} />
          </Suspense>
          {/* Close call button */}
          <Button variant="danger" className={styles["call-close"]} onClick={handleCloseCall}>
            <i className="bi bi-telephone"></i>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CallCanvas;
