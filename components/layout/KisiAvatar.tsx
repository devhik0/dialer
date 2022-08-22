import { Entry } from "contentful";
import { EntryFields } from "../../types/types";
import styles from "../../styles/scss/modules/layout/KisiAvatar.module.css";

type KisiAvatarProps = {
  kisi: Entry<EntryFields>;
};

const KisiAvatar = ({ kisi }: KisiAvatarProps) => {
  const { adsoyad } = kisi.fields;

  return (
    <div className={styles.avatar}>
      <span style={{ color: "#f6f6f6" }}>{adsoyad.toUpperCase().split(" ")[0][0]}</span>
    </div>
  );
};

export default KisiAvatar;
