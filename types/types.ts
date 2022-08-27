import { Entry } from "contentful";
import { MouseEvent } from "react";
import { OffcanvasProps } from "react-bootstrap";

// *** type definitions ***
type B = boolean;

type K = Entry<EntryFields>;

type N = number;

type S = string;

// Utils
type Input = { adsoyad: S };

// General
type Inputs = Input & { tel: S };

type Data = S | Input;

// Functions
type KisiDuzenleParams = { kisi: K; inputs: Inputs; iscalled: B; isfav: B };

// CMS
type EntryFields = { adsoyad: S; tel: S; slug: S; iscalled: B; isfav: B };

// Kisi Component Props
type KisiAvatarProps = { kisi: K };

type KisiDuzenleProps = OffcanvasProps & { kisi: K };

type KisiDuzenleFormProps = { kisi: K; handleClose: () => void };

type KisiEkleFormProps = { handleClose: () => void };

type KisiFavProps = { kisi: K };

type KisiFavSilModalProps = { kisi: K };

type KisiKartProps = OffcanvasProps & { kisi: K; kisiler: K[] };

type KisiKayitProps = { kisiler: K[] };

type KisiKayitSilModalProps = { kisi: K };

type KisiListeProps = { kisiler: K[] };

type KisiSecenekProps = OffcanvasProps & { kisi: K };

type KisiSilModalProps = { kisi: K };

// Layout components
type CallCanvasProps = OffcanvasProps & { kisi: K; kisiler: K[] };

type LayoutProps = { children: React.ReactNode };

type PadProps = {
  handleClick: (evt: MouseEvent<HTMLButtonElement>) => void;
  btns: (S | N)[];
  firstIndex: N;
  lastIndex: N;
};
type PadsProps = OffcanvasProps & { kisiler: K[] };

type SearchProps = { kisiler: K[] };

type SonucProps = { kisiler: K[]; query: S };

// Page props
type RehberProps = { kisiler: K[] };

type SonProps = { kisiler: K[] };

type FavProps = { kisiler: K[] };

export type {
  Inputs,
  Data,
  EntryFields,
  KisiDuzenleProps,
  KisiDuzenleFormProps,
  KisiDuzenleParams,
  KisiEkleFormProps,
  KisiFavProps,
  KisiFavSilModalProps,
  KisiKartProps,
  KisiKayitProps,
  KisiKayitSilModalProps,
  KisiListeProps,
  KisiSecenekProps,
  KisiSilModalProps,
  CallCanvasProps,
  KisiAvatarProps,
  LayoutProps,
  PadProps,
  PadsProps,
  SearchProps,
  SonucProps,
  RehberProps,
  SonProps,
  FavProps,
};
