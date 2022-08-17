import styles from "./Search.module.css";
import { Form } from "react-bootstrap";
import { ChangeEvent, useState } from "react";
import { Entry } from "contentful";
import { EntryFields } from "../../pages/rehber/index";

type SearchProps = {
  kisiler: Entry<EntryFields>[];
};

// todo: bunu düzenle

const Search = ({ kisiler }: SearchProps) => {
  // search state i
  // const [query, SetQuery] = useState('')

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    // SetQuery(evt.target.value.toLowerCase())
  };

  // const sonuc = kisiler
  //   .map(kisi => kisi.fields.adsoyad)
  //   .filter(k => k.toLowerCase().includes(query))
  //   .map(res => query && <li className={styles['search-result']} key={res}>{res}</li>)

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
          onChange={handleChange}
          // value={query}
          type="search"
          placeholder="Kişi arayın"
          aria-label="Search"
        />
      </Form>
      <div data-testid="kb" className={styles["search-results"]}>
        <b>Sonuçlar</b>
        {/* {sonuc.length !== 0 ? sonuc : <p>Böyle biri yok</p>} */}
      </div>
    </div>
  );
};

export default Search;
