import { Entry } from "contentful";
import { useState } from "react";
import { Button, Offcanvas, OffcanvasProps } from "react-bootstrap";
import styles from "../../styles/scss/modules/layout/CallCanvas.module.css";
import { EntryFields } from "../../types/types";
import KisiAvatar from "./KisiAvatar";
import Pads from "./Pads";

type CallCanvasProps = OffcanvasProps & {
  kisi: Entry<EntryFields>;
  kisiler: Entry<EntryFields>[];
};

// * Call screen offcanvas
const CallCanvas = ({ kisi, kisiler, ...props }: CallCanvasProps) => {
  const { adsoyad, tel } = kisi.fields;

  // call screen offcanvas state i
  const [showcall, setShowCall] = useState(false);

  const handleShowCall = () => setShowCall(true);
  const handleCloseCall = () => setShowCall(false);

  return (
    <>
      <Button onClick={handleShowCall} variant="outline-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-telephone"
          viewBox="0 0 16 16"
        >
          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
        </svg>
        <span>Ara</span>
      </Button>
      {/* // * Callscreen Offcanvas */}
      <Offcanvas
        style={{ width: "100vw", height: "100vh" }}
        className={styles.call}
        show={showcall}
        onHide={handleCloseCall}
        {...props}
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body className={styles["off-body"]}>
          <KisiAvatar kisi={kisi} />
          <span>Aranıyor...</span>
          <h4>{adsoyad}</h4>
          <h5>{tel}</h5>
          <Pads kisiler={kisiler} placement={"bottom"} name={"bottom"} />
          {/* Close call button */}
          <Button variant="danger" className={styles["call-close"]} onClick={handleCloseCall}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="bi bi-telephone"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CallCanvas;
