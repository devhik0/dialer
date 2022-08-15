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
      {/* // * FAB */}
      <Button onClick={handleShow} className={styles.fab}><Image src='/dialpad.svg' width={32} height={32} /></Button>
      {/* // !error: offcanvas X butonu telefonda çalışmıyor */}
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          Header
        </Offcanvas.Header>
        <Offcanvas.Body>
          Body
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Dialpad