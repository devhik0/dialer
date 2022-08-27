import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { SonucProps } from "../../types/types";
// import KisiKart from "../kisiler/KisiKart";

const DKisiKart = dynamic(() => import("../kisiler/KisiKart"));

const Sonuc = ({ kisiler, query }: SonucProps) => (
  <>
    <b style={{ fontSize: ".75rem" }}>Sonuçlar</b> <br />
    {kisiler
      .map((kisi) => (
        <Suspense key={kisi.sys.id} fallback={<Spinner animation="border" />}>
          <DKisiKart kisi={kisi} kisiler={kisiler} name={"end"} placement={"end"} />
        </Suspense>
      ))
      .filter((k) => {
        // * renders inside suspense as children
        const { adsoyad, tel } = k.props.children.props.kisi.fields;
        return adsoyad.includes(query) | tel.includes(query);
      })}
  </>
);

export default Sonuc;
