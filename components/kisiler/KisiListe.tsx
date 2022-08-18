import { Entry } from "contentful";
import type { EntryFields } from "../../pages/kisiler/index";
import KisiKart from "./KisiKart";

type KisiListeProps = {
  kisiler: Entry<EntryFields>[];
};

const KisiListe = ({ kisiler }: KisiListeProps) => {
  return (
    <>
      {kisiler.map((kisi) => (
        <KisiKart key={kisi.sys.id} kisi={kisi} name={"end"} placement={"end"} display={"row"} />
      ))}
    </>
  );
};

export default KisiListe;
