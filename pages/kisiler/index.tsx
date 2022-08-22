import { createClient, EntryCollection } from "contentful";
import { Button } from "react-bootstrap";
import KisiListe from "../../components/kisiler/KisiListe";
import Pads from "../../components/layout/Pads";
import Search from "../../components/layout/Search";
import styles from "../../styles/scss/modules/pages/kisiler/index.module.css";
import { EntryFields, RehberProps } from "../../types/types";

const client = createClient({
  space: process.env.C_SPC_ID || "",
  accessToken: process.env.C_ACC_TKN || "",
});

export const getStaticProps = async () => {
  const res: EntryCollection<EntryFields> = await client.getEntries({
    order: "fields.adsoyad",
    content_type: "kisi",
  });

  return { props: { kisiler: res.items } };
};

const Rehber = ({ kisiler }: RehberProps) => {
  return (
    <div className={styles.container}>
      <Search kisiler={kisiler} />
      <Button variant="outline" className={styles.eklebtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22px"
          height="22px"
          fill="currentColor"
          className="bi bi-person-plus"
          viewBox="0 0 16 16"
        >
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          <path
            fillRule="evenodd"
            d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
          />
        </svg>
        <span>Yeni kişi ekle</span>
      </Button>
      <KisiListe kisiler={kisiler} />
      {/* // * tuşlar offcanvas */}
      <Pads kisiler={kisiler} name={"bottom"} placement={"bottom"} />
    </div>
  );
};

export default Rehber;
