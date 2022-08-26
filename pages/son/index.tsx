import { EntryCollection } from "contentful";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { client } from "../../cms/setup";

// import KisiKayit from "../../components/kisiler/KisiKayit";
// import Search from "../../components/layout/Search";

import { EntryFields, SonProps } from "../../types/types";

const DKisiKayit = dynamic(() => import("../../components/kisiler/KisiKayit"));
const DSearch = dynamic(() => import("../../components/layout/Search"));

export const getStaticProps = async () => {
  const res: EntryCollection<EntryFields> = await client.getEntries({
    order: "-sys.updatedAt",
    content_type: "kisi",
    "fields.iscalled": true,
  });

  return { props: { kisiler: res.items } };
};

const Son = ({ kisiler }: SonProps) => {
  return (
    <>
      <Suspense fallback={<Spinner animation="border" />}>
        <DSearch kisiler={kisiler} />
        {/* arama kaydı kartı */}
        <DKisiKayit kisiler={kisiler} />
      </Suspense>
    </>
  );
};

export default Son;
