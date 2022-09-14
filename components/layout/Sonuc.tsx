import dynamic from "next/dynamic";

import { Suspense } from "react";

import Spinner from "react-bootstrap/Spinner";
import { useKisileriGetirQuery } from "../../features/api/apiSlice";

const DKisiKart = dynamic(() => import("../kisiler/KisiKart"));

const Sonuc = ({ query }: { query: string }) => {
  // data fetch CMS
  const { data } = useKisileriGetirQuery("kisiler");
  const kisiler = data?.items || [];

  return (
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
          const { adsoyad, tel }: { adsoyad: string; tel: string } = k.props.children.props.kisi.fields || {};
          return adsoyad?.includes(query) || tel?.includes(query);
        })}
    </>
  );
};

export default Sonuc;
