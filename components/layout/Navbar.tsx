import { useRouter } from "next/router";

import Nav from "react-bootstrap/Nav";

import styles from "../../styles/scss/modules/layout/Navbar.module.css";

const Navbar = () => {
  const router = useRouter();

  return (
    <Nav variant="pills" className={styles.navbar} justify>
      <Nav.Item>
        <Nav.Link href="/fav" style={{ background: router.asPath === "/fav" ? "#0d6efd" : "none" }}>
          <i className="bi bi-star"></i>
          <span>Favoriler</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/son" style={{ background: router.asPath === "/son" ? "#0d6efd" : "none" }}>
          <i className="bi bi-clock"></i>
          <span>Son</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="/kisiler"
          style={{
            background: router.asPath === "/kisiler" ? "#0d6efd" : "none",
          }}
        >
          <i className="bi bi-people"></i>
          <span>Kişiler</span>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
