import { SonucProps } from "../../types/types";
import KisiKart from "../kisiler/KisiKart";

const Sonuc = ({ kisiler, query }: SonucProps) => {
  return (
    <>
      <b style={{ fontSize: ".75rem" }}>Sonuçlar</b> <br />
      {kisiler
        .map((kisi) => <KisiKart key={kisi.sys.id} kisi={kisi} kisiler={kisiler} />)
        .filter((k) => {
          const { adsoyad, tel } = k.props.kisi.fields;
          return adsoyad.includes(query) | tel.includes(query);
        })}
    </>
  );
};

export default Sonuc;
