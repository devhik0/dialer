import { useKisileriGetirQuery } from "@features/apiSlice";
import styles from "@styles/pages/fav/index.module.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense } from "react";
import Spinner from "react-bootstrap/Spinner";

const DKisiFav = dynamic(() => import("../../components/kisiler/KisiFav"), { suspense: true });

const Fav = () => {
  const { data, isError, isLoading } = useKisileriGetirQuery("kisiler");
  // favori kişiler
  const kisiler = data?.items?.filter((kisi) => kisi.fields.isfav == true) || [];

  if (isError) {
    return <>Kişiler alınırken bir sorun oluştu.</>;
  }
  if (isLoading) {
    return <Spinner animation="border" variant="primary" />;
  } else {
    if (kisiler.length === 0) {
      return (
        <div className={styles.container}>
          <i className="bi bi-star"></i>
          <p>Hiç favori yok, eklemek için tıklayın</p>
          <Link href="/kisiler">
            <a>Favori Ekle</a>
          </Link>
        </div>
      );
    } else {
      return (
        <>
          <h6 style={{ margin: "1rem" }}>Favoriler</h6>
          {kisiler.map((kisi) => (
            <Suspense key={kisi.sys.id} fallback={<Spinner animation="border" variant="primary" />}>
              <DKisiFav kisi={kisi} />
            </Suspense>
          ))}
        </>
      );
    }
  }
};

export default Fav;
