import { useKisileriGetirQuery } from "@features/apiSlice";
import styles from "@styles/pages/kisiler/index.module.css";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Spinner } from "react-bootstrap";

const DKisiEkle = dynamic(() => import("components/kisiler/KisiEkle"), { suspense: true });
const DKisiListe = dynamic(() => import("components/kisiler/KisiListe"), { suspense: true });
const DPads = dynamic(() => import("components/layout/Pads"), { suspense: true });
const DSearch = dynamic(() => import("components/layout/Search"), { suspense: true });

const Rehber = () => {
  const { data, isError, isLoading } = useKisileriGetirQuery("kisiler");
  const kisiler = data?.items || [];

  if (isError) {
    return <>Kişiler alınırken bir sorun oluştu.</>;
  }
  if (isLoading) {
    return <Spinner animation="border" variant="primary" />;
  } else {
    if (data) {
      if (kisiler.length === 0) {
        return (
          <div className={styles["kisiyok-container"]}>
            <i className="bi bi-star"></i>
            <p>Hiç kişi yok, eklemek için tıklayın</p>
            <Suspense fallback={<Spinner animation="border" variant="primary" />}>
              <DKisiEkle />
            </Suspense>
          </div>
        );
      } else {
        return (
          <div className={styles.container}>
            <Suspense fallback={<Spinner animation="border" variant="primary" />}>
              <DSearch />
            </Suspense>
            <Suspense fallback={<Spinner animation="border" variant="primary" />}>
              <DKisiEkle />
            </Suspense>
            <Suspense fallback={<Spinner animation="border" variant="primary" />}>
              <DKisiListe />
            </Suspense>
            <Suspense fallback={<Spinner animation="border" variant="primary" />}>
              <DPads name={"bottom"} placement={"bottom"} />
            </Suspense>
          </div>
        );
      }
    }
  }
};

export default Rehber;
