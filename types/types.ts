import { Entry } from "contentful";
import { OffcanvasProps } from "react-bootstrap";

// CMS
type EntryFields = {
  adsoyad: string;
  tel: string;
  slug: string;
};

// Component Props
type KisiDuzenleProps = OffcanvasProps & {
  kisi: Entry<EntryFields>;
};

type KisiKartProps = OffcanvasProps & {
  kisi: Entry<EntryFields>;
  kisiler: Entry<EntryFields>[];
};

export type { EntryFields, KisiDuzenleProps, KisiKartProps };
