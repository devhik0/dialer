import { kisiFav } from "@cms/setup";
import { Kisi } from "@features/apiSlice";
import styles from "@styles/kisiler/KisiSecenek.module.css";
import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const DKisiDuzenle = dynamic(() => import("./KisiDuzenle"), { suspense: true });

const KisiSecenek = ({ kisi }: { kisi: Kisi }) => {
  // fav button color state i
  const [color, setColor] = useState("currentColor");
  const handleColor = () => (color === "var(--bs-blue)" ? setColor("currentColor") : setColor("var(--bs-blue)"));

  const handleClick = () => {
    kisiFav(kisi);
    alert("Kişi favorilere eklendi !");
  };

  return (
    <>
      {/* settings section */}
      <div className={styles.settings}>
        {/* edit button */}
        <Suspense fallback={<Spinner animation="border" variant="primary" />}>
          <DKisiDuzenle kisi={kisi} name={"end"} placement={"end"} />
        </Suspense>
        {/* fav button */}
        <Button onClick={handleClick} variant="outline">
          <i onClick={handleColor} style={{ color: color }} className="bi bi-star"></i>
        </Button>
      </div>
    </>
  );
};

export default KisiSecenek;
