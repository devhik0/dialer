import { Entry } from "contentful";
import Image from "next/image";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Button, Container, Form, Offcanvas, OffcanvasProps, Row } from "react-bootstrap";
import { EntryFields } from "../../pages/kisiler/index";
import styles from "../../styles/scss/modules/layout/Pads.module.css";
import Pad from "./Pad";
import Sonuc from "./Sonuc";

type PadsProps = OffcanvasProps & {
  kisiler: Entry<EntryFields>[];
};

// * Floating pads button with offcanvas
const Pads = ({ kisiler, ...props }: PadsProps) => {
  // dial offcanvas state i
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // search state i
  const [query, SetQuery] = useState("");

  // input ve pad state i
  const [val, setVal] = useState("");

  // events
  const handleClick = (evt: MouseEvent<HTMLButtonElement>) => {
    setVal(val.concat(evt.currentTarget.value));
    SetQuery(val.concat(evt.currentTarget.value));
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setVal(evt.currentTarget.value);
    SetQuery(evt.currentTarget.value);
    console.log(evt.target.value);
  };

  // silme işlevi
  const handleDelete = () => {
    const res = Array.from(val);
    res.pop();
    setVal(res.join(""));
    SetQuery(res.join(""));
  };

  // pads
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"];

  return (
    <>
      <Button onClick={handleShow} className={styles.fab}>
        <Image src="/dialpad.svg" alt="dialpad" width={32} height={32} />
      </Button>
      {/* // * Dialpad Offcanvas */}
      <Offcanvas style={{ height: "100vh" }} show={show} onHide={handleClose} {...props}>
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
        <div data-testid="kb" className={styles["search-results"]}>
          <Sonuc kisiler={kisiler} query={query} />
        </div>
        <Offcanvas.Header className={styles.offheader}>
          <Form.Control className={styles.offinput} onChange={handleChange} value={val} type="search" />
          <Button variant="outline" style={{ marginRight: ".5rem", padding: ".75rem .5rem" }} onClick={handleDelete}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-backspace"
              viewBox="0 0 16 16"
            >
              <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
              <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
            </svg>
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container fluid className={styles.pads}>
            <Row>
              <Pad handleClick={handleClick} btns={buttons} firstIndex={0} lastIndex={3} />
            </Row>
            <Row>
              <Pad handleClick={handleClick} btns={buttons} firstIndex={3} lastIndex={6} />
            </Row>
            <Row>
              <Pad handleClick={handleClick} btns={buttons} firstIndex={6} lastIndex={9} />
            </Row>
            <Row>
              <Pad handleClick={handleClick} btns={buttons} firstIndex={9} lastIndex={12} />
            </Row>
            <Button variant="outline-success" className={styles["pad-call-btn"]}>
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
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Pads;
