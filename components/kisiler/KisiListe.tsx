import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { useKisileriGetirQuery } from "../../features/api/apiSlice";

const DKisiKart = dynamic(() => import("../kisiler/KisiKart"), { suspense: true });

const KisiListe = () => {
  const { data } = useKisileriGetirQuery("kisiler");
  const kisiler = data?.items || [];

  return (
    <div style={{ height: "70vh", overflow: "scroll", display: "flex", flexDirection: "column" }}>
      {kisiler.map((kisi) => (
        <Suspense
          key={kisi.sys.id}
          fallback={<Spinner animation="border" style={{ alignSelf: "center", color: "var(--bs-primary)" }} />}
        >
          <DKisiKart kisi={kisi} name={"end"} placement={"end"} />
        </Suspense>
      ))}
    </div>
  );
};

export default KisiListe;
