import dynamic from "next/dynamic";

import { Suspense } from "react";

import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

import styles from "../../styles/scss/modules/kisiler/KisiFav.module.css";

import type { KisiFavProps } from "../../types/types";

import KisiAvatar from "./KisiAvatar";

const DKisiFavSilModal = dynamic(() => import("./KisiFavSilModal"));

const KisiFav = ({ kisi }: KisiFavProps) => (
  <Card key={kisi.sys.id} className={styles["kisi-container"]}>
    <Card.Body className={styles["kisi-container-col"]}>
      <KisiAvatar kisi={kisi} />
      <span>{kisi.fields.adsoyad}</span>
      <Suspense fallback={<Spinner animation="border" />}>
        <DKisiFavSilModal kisi={kisi} />
      </Suspense>
    </Card.Body>
  </Card>
);

export default KisiFav;
