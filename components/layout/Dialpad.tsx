import Image from 'next/image'
import { useState } from 'react'
import { Button, Col, Container, Form, Offcanvas, OffcanvasProps, Row } from 'react-bootstrap'
import styles from './Dialpad.module.css'

function Dialpad({ name, ...props }: OffcanvasProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* // * Floating Action Button */}
      <Button onClick={handleShow} className={styles.fab}><Image src='/dialpad.svg' width={32} height={32} /></Button>
      <Offcanvas
        className={styles.dialpad}
        show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header>
          <Form.Control style={{ margin: '0 .75rem' }} />
          <Button style={{ margin: '0' }} variant='outline-muted'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-backspace" viewBox="0 0 16 16">
              <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
              <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
            </svg>
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* // todo: tuş işlevi ekle ! */}
          <Container fluid className={styles.pads}>
            <Row>
              <Col><Button variant='outline-primary' className={styles['pad-btn']}>1</Button></Col>
              <Col><Button variant='outline-primary' className={styles['pad-btn']}>2</Button></Col>
              <Col><Button variant='outline-primary' className={styles['pad-btn']}>3</Button></Col>
            </Row>
            <Row>
              <Col><Button variant='outline-primary' className={styles['pad-btn']}>4</Button></Col>
              <Col><Button variant='outline-primary' className={styles['pad-btn']}>5</Button></Col>
              <Col><Button variant='outline-primary' className={styles['pad-btn']}>6</Button></Col>
            </Row>
            <Row>
              <Col><Button variant='outline-primary' className={styles['pad-btn']}>7</Button></Col>
              <Col><Button variant='outline-primary' className={styles['pad-btn']}>8</Button></Col>
              <Col><Button variant='outline-primary' className={styles['pad-btn']}>9</Button></Col>
            </Row>
            <Row>
              <Col><Button variant='outline-primary' className={styles['pad-btn']}>*</Button></Col>
              <Col><Button variant='outline-primary' className={styles['pad-btn']}>0</Button></Col>
              <Col><Button variant='outline-primary' className={styles['pad-btn']}>#</Button></Col>
            </Row>
            <Button variant='outline-success' className={styles['pad-call-btn']}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
              <span>Ara</span>
            </Button>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Dialpad