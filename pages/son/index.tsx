import dynamic from "next/dynamic";
import Link from "next/link";

import { Suspense } from "react";

import Spinner from "react-bootstrap/Spinner";

import { useKisileriGetirQuery } from "../../features/api/apiSlice";

const DKisiKayit = dynamic(() => import("../../components/kisiler/KisiKayit"), { suspense: true });
const DSearch = dynamic(() => import("../../components/layout/Search"), { suspense: true });

const Son = () => {
  const { data, isError, isLoading } = useKisileriGetirQuery("kisiler");
  const kisiler = data?.items?.filter((kisi) => kisi.fields.iscalled == true) || [];

  if (isError) {
    return <>Kişiler alınırken bir sorun oluştu.</>;
  }
  if (isLoading) {
    return <Spinner animation="border" variant="primary" />;
  } else {
    if (kisiler.length === 0) {
      return (
        <div
          style={{
            marginTop: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <i className="bi bi-star" style={{ fontSize: "32px" }}></i>
          <p style={{ fontWeight: "bold" }}>Hiç kayıt yok, eklemek için birilerini arayın</p>
          <Link href="/kisiler">
            <a>Kişiler</a>
          </Link>
        </div>
      );
    } else {
      return (
        <Suspense fallback={<Spinner animation="border" variant="primary" />}>
          <DSearch />
          {/* arama kaydı kartı */}
          <DKisiKayit />
        </Suspense>
      );
    }
  }
};

export default Son;
