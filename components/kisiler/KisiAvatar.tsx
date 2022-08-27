import styles from "../../styles/scss/modules/kisiler/KisiAvatar.module.css";
import { KisiAvatarProps } from "../../types/types";

const KisiAvatar = ({ kisi }: KisiAvatarProps) => (
  <div className={styles.avatar}>
    <span>{kisi.fields.adsoyad.toUpperCase().split(" ")[0][0]}</span>
  </div>
);

export default KisiAvatar;
