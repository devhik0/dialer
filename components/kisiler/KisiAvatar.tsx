import { Kisi } from "../../features/api/apiSlice";
import styles from "../../styles/scss/modules/kisiler/KisiAvatar.module.css";

const KisiAvatar = ({ kisi }: { kisi: Kisi }) => {
  const { adsoyad } = kisi.fields || {};
  return (
    <div className={styles.avatar}>
      <span>{adsoyad?.toUpperCase().split(" ")[0][0]}</span>
    </div>
  );
};

export default KisiAvatar;
