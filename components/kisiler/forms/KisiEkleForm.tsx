import { kisiEkle } from "@cms/setup";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const KisiEkleForm = ({ handleClose }: { handleClose: () => void }) => {
  // form state i
  const [inputs, setInputs] = useState({ adsoyad: "", tel: "" });

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget;
    setInputs((val) => ({ ...val, [name]: value }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    kisiEkle(inputs);
    alert("Kişi Eklendi !");
    handleClose();
    // form temizleme
    setInputs({ adsoyad: "", tel: "" });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <i className="bi bi-person"></i>
        <Form.Label>Ad Soyad</Form.Label>
        <Form.Control
          name="adsoyad"
          value={inputs.adsoyad || ""}
          onChange={handleChange}
          placeholder="Ad girin"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <i className="bi bi-telephone"></i>
        <Form.Label>Telefon</Form.Label>
        <Form.Control
          name="tel"
          value={inputs.tel || ""}
          onChange={handleChange}
          placeholder="Telefon girin"
          required
        />
        <Button variant="outline-primary" type="submit" className="mt-3" style={{ width: "100%" }}>
          Kaydet
        </Button>
      </Form.Group>
    </Form>
  );
};

export default KisiEkleForm;
