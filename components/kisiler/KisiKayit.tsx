import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Card, Spinner } from "react-bootstrap";
import styles from "../../styles/scss/modules/kisiler/KisiKayit.module.css";
import { KisiKayitProps } from "../../types/types";
import KisiAvatar from "./KisiAvatar";

const DKisiKayitSilModal = dynamic(() => import("./KisiKayitSilModal"));

const KisiKayit = ({ kisiler }: KisiKayitProps) => (
  <>
    {kisiler.map((kisi) => (
      <Card key={kisi.sys.id} className={styles["kisi-container"]}>
        <Card.Body className={styles["kisi-container-col"]}>
          <KisiAvatar kisi={kisi} />
          <span>{kisi.fields.adsoyad}</span>
          <Suspense fallback={<Spinner animation="border" />}>
            <DKisiKayitSilModal kisi={kisi} />
          </Suspense>
        </Card.Body>
      </Card>
    ))}
  </>
);

export default KisiKayit;
