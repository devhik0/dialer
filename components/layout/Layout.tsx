import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ maxWidth: "100%" }}>
      <main>{children}</main>
      <Navbar />
    </div>
  );
};

export default Layout;
