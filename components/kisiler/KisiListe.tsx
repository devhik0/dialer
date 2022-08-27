import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { KisiListeProps } from "../../types/types";

const DKisiKart = dynamic(() => import("./KisiKart"));

const KisiListe = ({ kisiler }: KisiListeProps) => (
  <div style={{ height: "70vh", overflow: "scroll" }}>
    {kisiler.map((kisi) => (
      <Suspense key={kisi.sys.id} fallback={<Spinner animation="border" />}>
        <DKisiKart kisi={kisi} kisiler={kisiler} name={"end"} placement={"end"} />
      </Suspense>
    ))}
  </div>
);

export default KisiListe;
