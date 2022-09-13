import dynamic from "next/dynamic";

import { Suspense } from "react";

import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

import styles from "../../styles/scss/modules/kisiler/KisiKayit.module.css";

import type { Kisi } from "../../features/api/apiSlice";

import KisiAvatar from "./KisiAvatar";

const DKisiKayitSilModal = dynamic(() => import("./KisiKayitSilModal"));

const KisiKayit = ({ kisiler }: { kisiler: Kisi[] }) => (
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
