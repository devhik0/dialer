import { EntryCollection } from "contentful";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { client } from "../../cms/setup";

import styles from "../../styles/scss/modules/pages/kisiler/index.module.css";
import { EntryFields, RehberProps } from "../../types/types";

const DKisiEkle = dynamic(() => import("../../components/kisiler/KisiEkle"));
const DKisiListe = dynamic(() => import("../../components/kisiler/KisiListe"));
const DPads = dynamic(() => import("../../components/layout/Pads"));
const DSearch = dynamic(() => import("../../components/layout/Search"));

export const getStaticProps = async () => {
  const res: EntryCollection<EntryFields> = await client.getEntries({
    order: "fields.adsoyad",
    content_type: "kisi",
  });

  return { props: { kisiler: res.items } };
};

const Rehber = ({ kisiler }: RehberProps) => {
  return (
    <div className={styles.container}>
      <Suspense fallback={<Spinner animation="border" />}>
        <DSearch kisiler={kisiler} />
      </Suspense>
      <Suspense fallback={<Spinner animation="border" />}>
        <DKisiEkle />
      </Suspense>
      <Suspense fallback={<Spinner animation="border" />}>
        <DKisiListe kisiler={kisiler} />
      </Suspense>
      {/* // * tuşlar offcanvas */}
      <Suspense fallback={<Spinner animation="border" />}>
        <DPads kisiler={kisiler} name={"bottom"} placement={"bottom"} />
      </Suspense>
    </div>
  );
};

export default Rehber;
