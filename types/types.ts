import type { Entry, EntryCollection } from "contentful";

import type { MouseEvent } from "react";

import type { OffcanvasProps } from "react-bootstrap";

// *** type definitions ***
// CMS
export type EntryFields = { adsoyad: S; tel: S; slug: S; iscalled: B; isfav: B };

export type B = boolean;

export type C = EntryCollection<EntryFields>;

export type K = Entry<EntryFields>;

export type N = number;

export type S = string;

// Utils
export type Input = { adsoyad: S };

// General
export type Inputs = Input & { tel: S };

export type Data = S | Input;

// Functions
export type KisiDuzenleParams = { kisi: K; inputs: Inputs; iscalled: B; isfav: B };

// Kisi Component Props
export type KisiAvatarProps = { kisi: K };

export type KisiDuzenleProps = OffcanvasProps & { kisi: K };

export type KisiDuzenleFormProps = { kisi: K; handleClose: () => void };

export type KisiEkleFormProps = { handleClose: () => void };

export type KisiFavProps = { kisi: K };

export type KisiFavSilModalProps = { kisi: K };

export type KisiKartProps = OffcanvasProps & { kisi: K; kisiler: K[] };

export type KisiKayitProps = { kisiler: K[] };

export type KisiKayitSilModalProps = { kisi: K };

export type KisiListeProps = { kisiler: K[] };

export type KisiSecenekProps = OffcanvasProps & { kisi: K };

export type KisiSilModalProps = { kisi: K };

// Layout components
export type CallCanvasProps = OffcanvasProps & { kisi: K; kisiler: K[] };

export type LayoutProps = { children: React.ReactNode };

export type PadProps = {
  handleClick: (evt: MouseEvent<HTMLButtonElement>) => void;
  btns: (S | N)[];
  firstIndex: N;
  lastIndex: N;
};
export type PadsProps = OffcanvasProps & { kisiler: K[] };

export type SearchProps = { kisiler: K[] };

export type SonucProps = { kisiler: K[]; query: S };

// Page props
export type RehberProps = { kisiler: K[] };

export type SonProps = { kisiler: K[] };

export type FavProps = { kisiler: K[] };
