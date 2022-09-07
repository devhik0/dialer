import dynamic from "next/dynamic";
import Link from "next/link";

import { Suspense } from "react";

import Spinner from "react-bootstrap/Spinner";

import { client } from "../../cms/setup";

import styles from "../../styles/scss/modules/pages/fav/index.module.css";

import type { C, FavProps } from "../../types/types";

const DKisiFav = dynamic(() => import("../../components/kisiler/KisiFav"));

export const getStaticProps = async () => {
  const res: C = await client.getEntries({
    order: "-sys.updatedAt",
    content_type: "kisi",
    "fields.isfav": true,
  });

  return { props: { kisiler: res.items }, revalidate: 60 };
};

const Fav = ({ kisiler }: FavProps) => (
  <>
    {kisiler.length === 0 ? (
      <div className={styles.container}>
        <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-star" viewBox="0 0 16 16">
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
        </svg>
        <p>Hiç favori yok, eklemek için tıklayın</p>
        <Link href="/kisiler">
          <a>Favori Ekle</a>
        </Link>
      </div>
    ) : (
      <>
        <h6 style={{ margin: "1rem" }}>Favoriler</h6>
        {kisiler.map((kisi) => (
          <Suspense key={kisi.sys.id} fallback={<Spinner animation="border" />}>
            <DKisiFav kisi={kisi} />
          </Suspense>
        ))}
      </>
    )}
  </>
);

export default Fav;
