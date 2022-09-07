import Router from "next/router";

import { useEffect } from "react";

const Anasayfa = () => {
  useEffect(() => {
    Router.pathname === "/" ? Router.push("/son") : "";
  });
};

export default Anasayfa;
