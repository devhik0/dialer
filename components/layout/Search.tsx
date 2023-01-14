import dynamic from "next/dynamic";

import { ChangeEvent, Suspense, useState } from "react";

import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

import styles from "../../styles/scss/modules/layout/Search.module.css";

const DSonuc = dynamic(() => import("./Sonuc"), { suspense: true });

const Search = () => {
  // search state i
  const [query, setQuery] = useState("");

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => setQuery(evt.target.value.toLowerCase());

  return (
    <div className={styles.search}>
      <Form className={styles.form}>
        <i className="bi bi-search"></i>
        <Form.Control
          value={query}
          onChange={handleChange}
          type="search"
          placeholder="Kişi arayın"
          aria-label="Search"
        />
      </Form>

      <div data-testid="kb" className={styles["search-results"]}>
        <Suspense fallback={<Spinner animation="border" variant="primary" />}>
          <DSonuc query={query} />
        </Suspense>
      </div>
    </div>
  );
};

export default Search;
