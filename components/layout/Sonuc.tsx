import dynamic from "next/dynamic";

import { Suspense } from "react";

import Spinner from "react-bootstrap/Spinner";
import { useKisileriGetirQuery } from "../../features/api/apiSlice";

const DKisiKart = dynamic(() => import("../kisiler/KisiKart"), { suspense: true });

const Sonuc = ({ query }: { query: string }) => {
  // data fetch CMS
  const { data, isError, isLoading } = useKisileriGetirQuery("kisiler");
  const kisiler = data?.items || [];

  if (isError) {
    return <>Kişiler alınırken bir sorun oluştu.</>;
  }
  if (isLoading) {
    return <Spinner animation="border" />;
  } else {
    return (
      <>
        <b style={{ fontSize: ".75rem" }}>Sonuçlar</b> <br />
        {kisiler
          .map((kisi) => (
            <Suspense key={kisi.sys.id} fallback={<Spinner animation="border" />}>
              <DKisiKart kisi={kisi} name={"end"} placement={"end"} />
            </Suspense>
          ))
          .filter((k) => {
            // * renders inside suspense as children
            const { adsoyad, tel }: { adsoyad: string; tel: string } = k.props.children.props.kisi.fields || {};
            return adsoyad?.includes(query) || tel?.includes(query);
          })}
      </>
    );
  }
};

export default Sonuc;
