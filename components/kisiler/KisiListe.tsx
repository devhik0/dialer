import { KisiListeProps } from "../../types/types";
import KisiKart from "./KisiKart";

const KisiListe = ({ kisiler }: KisiListeProps) => {
  return (
    <div style={{ height: "70vh", overflow: "scroll" }}>
      {kisiler.map((kisi) => (
        <KisiKart key={kisi.sys.id} kisi={kisi} kisiler={kisiler} name={"end"} placement={"end"} />
      ))}
    </div>
  );
};

export default KisiListe;
