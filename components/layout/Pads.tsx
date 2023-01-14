import styles from "@styles/layout/Pads.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ChangeEvent, MouseEvent, Suspense, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Offcanvas, { OffcanvasProps } from "react-bootstrap/Offcanvas";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import { Pad } from "./Pad";

const DSonuc = dynamic(() => import("./Sonuc"), { suspense: true });

// * Floating pads button with offcanvas
const Pads = ({ ...props }: OffcanvasProps) => {
  // dial offcanvas state i
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  // input ve pad state i
  const [val, setVal] = useState("");
  // search state i
  const [query, SetQuery] = useState("");
  // events
  const handleClick = (evt: MouseEvent<HTMLButtonElement>) => {
    setVal(val.concat(evt.currentTarget.value));
    SetQuery(val.concat(evt.currentTarget.value));
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setVal(evt.currentTarget.value);
    SetQuery(evt.currentTarget.value);
  };

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

      {/* Dialpad Offcanvas */}
      <Offcanvas style={{ height: "100vh" }} show={show} onHide={handleClose} {...props}>
        <Button onClick={handleClose} variant="outline" className={styles.back}>
          <i className="bi bi-arrow-left"></i>
        </Button>

        <div data-testid="kb" className={styles["search-results"]}>
          <Suspense fallback={<Spinner animation="border" variant="primary" />}>
            <DSonuc query={query} />
          </Suspense>
        </div>

        <Offcanvas.Header className={styles.offheader}>
          <Form.Control className={styles.offinput} onChange={handleChange} value={val} type="search" />
          <Button variant="outline" style={{ marginRight: ".5rem", padding: ".75rem .5rem" }} onClick={handleDelete}>
            <i className="bi bi-backspace"></i>
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
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Pads;
