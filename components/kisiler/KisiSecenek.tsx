import { useState } from "react";
import { Button, Offcanvas, OffcanvasProps } from "react-bootstrap";
import styles from "../../styles/scss/modules/kisiler/KisiSecenek.module.css";

type KisiSecenekProps = OffcanvasProps;

const KisiSecenek = ({ ...props }: KisiSecenekProps) => {
  // offcanvas state i
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* settings section */}
      <div className={styles.settings}>
        {/* edit button */}
        <Button variant="outline" onClick={handleShow}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
          </svg>
        </Button>
        {/* kişi düzenleme sayfası */}
        <Offcanvas style={{ width: "100vw", height: "100vh" }} show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>kişi düzenleme sayfası</Offcanvas.Body>
        </Offcanvas>
        {/*  //todo: buna renk state i ekle */}
        {/* fav button */}
        <Button variant="outline">
          <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-star" viewBox="0 0 16 16">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
          </svg>
        </Button>
      </div>
    </>
  );
};

export default KisiSecenek;
