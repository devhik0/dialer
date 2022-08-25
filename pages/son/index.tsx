import { EntryCollection } from "contentful";
import { client } from "../../cms/setup";
import KisiKayit from "../../components/kisiler/KisiKayit";
import Search from "../../components/layout/Search";
import { EntryFields, SonProps } from "../../types/types";

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
      <Search kisiler={kisiler} />
      {/* arama kaydı kartı */}
      <KisiKayit kisiler={kisiler} />
    </>
  );
};

export default Son;
