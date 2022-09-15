import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { useKisileriGetirQuery } from "../../features/api/apiSlice";

const DKisiKart = dynamic(() => import("../kisiler/KisiKart"), { suspense: true });

const KisiListe = () => {
  const { data, isError, isLoading } = useKisileriGetirQuery("kisiler");
  const kisiler = data?.items || [];

  if (isError) {
    return <>Kişiler alınırken bir sorun oluştu.</>;
  }
  if (isLoading) {
    return <Spinner animation="border" variant="primary" />;
  } else {
    return (
      <div style={{ height: "70vh", overflow: "scroll", display: "flex", flexDirection: "column" }}>
        {kisiler.map((kisi) => (
          <Suspense key={kisi.sys.id} fallback={<Spinner animation="border" variant="primary" />}>
            <DKisiKart kisi={kisi} name={"end"} placement={"end"} />
          </Suspense>
        ))}
      </div>
    );
  }
};

export default KisiListe;
