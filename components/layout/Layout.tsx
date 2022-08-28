import { LayoutProps } from "../../types/types";
import Navbar from "./Navbar";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{ maxWidth: "100%" }}>
      <main>{children}</main>
      <Navbar />
    </div>
  );
};

export default Layout;
