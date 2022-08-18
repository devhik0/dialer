import Router from "next/router";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const { pathname } = Router;
    pathname === "/" ? Router.push("/son") : "";
  });

  return <></>;
};

export default Home;
