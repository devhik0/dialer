import { KisiListeProps } from "../../types/types";
import KisiKart from "./KisiKart";

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
