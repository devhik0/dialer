import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { Kisi } from "../../features/api/apiSlice";

const DKisiKart = dynamic(() => import("../kisiler/KisiKart"), { suspense: true });

const KisiListe = ({ kisiler }: { kisiler: Kisi[] }) => {
  return (
    <div style={{ height: "70vh", overflow: "scroll" }}>
      {kisiler.map((kisi) => (
        <Suspense key={kisi.sys.id} fallback={<Spinner animation="border" />}>
          <DKisiKart kisi={kisi} kisiler={kisiler} name={"end"} placement={"end"} />
        </Suspense>
      ))}
    </div>
  );
};

export default KisiListe;
