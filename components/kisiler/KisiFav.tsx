import type { Kisi } from "@features/apiSlice";
import styles from "@styles/kisiler/KisiFav.module.css";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import KisiAvatar from "./KisiAvatar";

const DKisiFavSilModal = dynamic(() => import("./modals/KisiFavSilModal"), { suspense: true });

const KisiFav = ({ kisi }: { kisi: Kisi }) => (
  <Card key={kisi.sys.id} className={styles["kisi-container"]}>
    <Card.Body className={styles["kisi-container-col"]}>
      <KisiAvatar kisi={kisi} />
      <span>{kisi.fields.adsoyad}</span>
      <Suspense fallback={<Spinner animation="border" variant="primary" />}>
        <DKisiFavSilModal kisi={kisi} />
      </Suspense>
    </Card.Body>
  </Card>
);

export default KisiFav;
