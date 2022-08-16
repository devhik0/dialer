import { Entry } from 'contentful'
import Image from "next/image"
import { ChangeEvent, MouseEvent, useState } from 'react'
import { Button, Container, Form, Offcanvas, OffcanvasProps, Row } from 'react-bootstrap'
import { EntryFields } from '../../pages/rehber/index'
import CallCanvas from './CallCanvas'
import Pad from './Pad'
import styles from './Pads.module.css'

type PadsProps = OffcanvasProps & {
  kisiler: Entry<EntryFields>[]
}

// * Floating pads button with offcanvas
const Pads = ({ name, kisiler, ...props }: PadsProps) => {
  // dial offcanvas state i
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  // search state i
  const [query, SetQuery] = useState('')

  // input ve pad state i
  const [val, setVal] = useState('')

  // events 
  const handleClick = (evt: MouseEvent<HTMLButtonElement>) => {
    setVal(val.concat(evt.currentTarget.value))
    SetQuery(val.concat(evt.currentTarget.value))
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setVal(evt.target.value)
  }

  // silme işlevi
  const handleDelete = () => {
    const res = Array.from(val)
    res.pop()
    setVal(res.join(''))
  }

  // ! error: silince eski sonucları göstermiyor !
  // arama sonucu
  const sonuc = kisiler
    .map(kisi => kisi.fields.tel)
    .filter(k => {
      console.log(query)
      return k.includes(query)
    })
    .map(res => query && <li className={styles['search-result']} key={res}>{res}</li>)

  // pads 
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#']

  return (
    <>
      <Button onClick={handleShow} className={styles.fab}>
        <Image src='/dialpad.svg' alt='dialpad' width={32} height={32} />
      </Button>
      {/* // * Dialpad Offcanvas */}
      <Offcanvas style={{ height: '100vh' }} show={show} onHide={handleClose} {...props}>
        <div data-testid='kb' className={styles['search-results']}>
          {sonuc.length !== 0 ? <>Sonuçlar: {sonuc}</> : ''}
        </div>
        <Offcanvas.Header className={styles.offheader} closeButton>
          <Form.Control className={styles.offinput} value={val} onChange={handleChange} />
          <Button variant='outline-muted' style={{ padding: '.75rem' }} onClick={handleDelete}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
              className="bi bi-backspace" viewBox="0 0 16 16">
              <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
              <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
            </svg>
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container fluid className={styles.pads}>
            <Row><Pad handleClick={handleClick} btns={buttons} firstIndex={0} lastIndex={3} /></Row>
            <Row><Pad handleClick={handleClick} btns={buttons} firstIndex={3} lastIndex={6} /></Row>
            <Row><Pad handleClick={handleClick} btns={buttons} firstIndex={6} lastIndex={9} /></Row>
            <Row><Pad handleClick={handleClick} btns={buttons} firstIndex={9} lastIndex={12} /></Row>
            <CallCanvas kisiler={kisiler} name={'bottom'} placement={'bottom'} />
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Pads