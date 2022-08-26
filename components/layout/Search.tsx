import dynamic from "next/dynamic";
import { ChangeEvent, Suspense, useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import styles from "../../styles/scss/modules/layout/Search.module.css";
import { SearchProps } from "../../types/types";
// import Sonuc from "./Sonuc";

const DSonuc = dynamic(() => import("./Sonuc"));

const Search = ({ kisiler }: SearchProps) => {
  // search state i
  const [query, SetQuery] = useState("");

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    SetQuery(evt.target.value.toLowerCase());
  };

  return (
    <div className={styles.search}>
      <Form className={styles.form}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <Form.Control
          value={query}
          onChange={handleChange}
          type="search"
          placeholder="Kişi arayın"
          aria-label="Search"
        />
      </Form>
      <div data-testid="kb" className={styles["search-results"]}>
        <Suspense fallback={<Spinner animation="border" />}>
          <DSonuc kisiler={kisiler} query={query} />
        </Suspense>
      </div>
    </div>
  );
};

export default Search;
