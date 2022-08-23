import { EntryCollection } from "contentful";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form, Offcanvas } from "react-bootstrap";
import { client } from "../../cms/setup";
import KisiListe from "../../components/kisiler/KisiListe";
import Pads from "../../components/layout/Pads";
import Search from "../../components/layout/Search";
import styles from "../../styles/scss/modules/pages/kisiler/index.module.css";
import { EntryFields, RehberProps } from "../../types/types";

export const getStaticProps = async () => {
  const res: EntryCollection<EntryFields> = await client.getEntries({
    order: "fields.adsoyad",
    content_type: "kisi",
  });

  return { props: { kisiler: res.items } };
};

const Rehber = ({ kisiler, ...props }: RehberProps) => {
  // offcanvas state i
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // form state i
  const [inputs, setInputs] = useState({ adsoyad: "", tel: "" });

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget;
    setInputs((val) => ({ ...val, [name]: value }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(inputs);
    setInputs({ adsoyad: "", tel: "" });
  };

  return (
    <div className={styles.container}>
      <Search kisiler={kisiler} />
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
          <Form className={styles.form} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              <Form.Label>Ad</Form.Label>
              <Form.Control
                name="adsoyad"
                value={inputs.adsoyad || ""}
                onChange={handleChange}
                placeholder="Ad girin"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
              <Form.Label>Telefon</Form.Label>
              <Form.Control name="tel" value={inputs.tel || ""} onChange={handleChange} placeholder="Telefon girin" />
              <Button variant="outline-primary" type="submit" className="mt-3" style={{ width: "100%" }}>
                Kaydet
              </Button>
            </Form.Group>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
      <KisiListe kisiler={kisiler} />
      {/* // * tuşlar offcanvas */}
      <Pads kisiler={kisiler} name={"bottom"} placement={"bottom"} />
    </div>
  );
};

export default Rehber;
