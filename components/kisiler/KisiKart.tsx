import { Entry } from "contentful";
import { EntryFields } from "../../pages/rehber/index";
import styles from "./KisiKart.module.css";

type KisiKartProps = {
  kisi: Entry<EntryFields>;
};

const KisiKart = ({ kisi }: KisiKartProps) => {
  const makeInitial = () => {
    const initial = kisi.fields.adsoyad.toUpperCase().split(" ");
    const ad = initial[0][0];
    return `${ad}`;
  };

  return (
    <div className={styles["kisi-container"]} key={kisi.sys.id}>
      <div className={styles.avatar}>
        <span style={{ color: "#f5f6f6" }}>{makeInitial()}</span>
      </div>
      {kisi.fields.adsoyad} {kisi.fields.tel}
    </div>
  );
};

export default KisiKart;
