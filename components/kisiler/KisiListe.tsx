import { Entry } from "contentful";
import { EntryFields } from "../../types/types";
import KisiKart from "./KisiKart";

type KisiListeProps = {
  kisiler: Entry<EntryFields>[];
};

const KisiListe = ({ kisiler }: KisiListeProps) => {
  return (
    <>
      {kisiler.map((kisi) => (
        <KisiKart key={kisi.sys.id} kisi={kisi} kisiler={kisiler} name={"end"} placement={"end"} />
      ))}
    </>
  );
};

export default KisiListe;
