import { Kisi } from "@features/apiSlice";
import styles from "@styles/kisiler/KisiAvatar.module.css";

const KisiAvatar = ({ kisi }: { kisi: Kisi }) => {
  const { adsoyad } = kisi.fields || {};

  return (
    <div className={styles.avatar}>
      <span>{adsoyad?.toUpperCase().split(" ")[0][0]}</span>
    </div>
  );
};

export default KisiAvatar;
