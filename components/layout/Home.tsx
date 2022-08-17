import { useEffect } from "react";
import Router from "next/router";

const Home = () => {
  useEffect(() => {
    const { pathname } = Router;
    pathname === "/" ? Router.push("/son") : "";
  });

  return <></>;
};

export default Home;
