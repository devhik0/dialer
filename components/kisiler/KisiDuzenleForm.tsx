import { ChangeEvent, FormEvent, useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { kisiDuzenle } from "../../cms/setup";

import type { Kisi } from "../../features/api/apiSlice";

const KisiDuzenleForm = ({ kisi, handleClose }: { kisi: Kisi; handleClose: () => void }) => {
  const { adsoyad, tel, iscalled, isfav } = kisi.fields;

  // form state i
  const [inputs, setInputs] = useState({ adsoyad, tel });

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget;
    setInputs((val) => ({ ...val, [name]: value }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    kisiDuzenle({ kisi, inputs, iscalled, isfav });
    alert("Kişi güncellendi");
    handleClose();
    // form temizleme
    setInputs({ adsoyad: "", tel: "" });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <i className="bi bi-person"></i>
        <Form.Label>Ad</Form.Label>
        <Form.Control name="adsoyad" value={inputs.adsoyad} onChange={handleChange} placeholder="Ad girin" />
      </Form.Group>

      <Form.Group className="mb-3">
        <i className="bi bi-telephone"></i>
        <Form.Label>Telefon</Form.Label>
        <Form.Control name="tel" value={inputs.tel} onChange={handleChange} placeholder="Telefon girin" />
      </Form.Group>

      <Button variant="outline-primary" type="submit">
        Kaydet
      </Button>
    </Form>
  );
};

export default KisiDuzenleForm;
