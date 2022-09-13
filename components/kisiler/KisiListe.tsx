import dynamic from "next/dynamic";

import { Suspense } from "react";

import Spinner from "react-bootstrap/Spinner";

import type { Kisi } from "../../features/api/apiSlice";

const DKisiKart = dynamic(() => import("./KisiKart"));

const KisiListe = ({ kisiler }: { kisiler: Kisi[] }) => (
  <div style={{ height: "70vh", overflow: "scroll" }}>
    {kisiler &&
      kisiler.map((kisi) => (
        <Suspense key={kisi.sys.id} fallback={<Spinner animation="border" />}>
          <DKisiKart kisi={kisi} kisiler={kisiler} name={"end"} placement={"end"} />
        </Suspense>
      ))}
  </div>
);

export default KisiListe;
