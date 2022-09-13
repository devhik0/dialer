import styles from "../../styles/scss/modules/kisiler/KisiAvatar.module.css";
import type { Kisi } from "../../features/api/apiSlice";

const KisiAvatar = ({ kisi }: { kisi: Kisi }) => (
  <div className={styles.avatar}>
    <span>{kisi.fields.adsoyad.toUpperCase().split(" ")[0][0]}</span>
  </div>
);

export default KisiAvatar;
