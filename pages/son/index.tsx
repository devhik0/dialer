import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { client } from "../../cms/setup";
import { C, SonProps } from "../../types/types";

const DKisiKayit = dynamic(() => import("../../components/kisiler/KisiKayit"));
const DSearch = dynamic(() => import("../../components/layout/Search"));

export const getStaticProps = async () => {
  const res: C = await client.getEntries({
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
