import { Entry } from "contentful";
import { MouseEvent } from "react";
import { OffcanvasProps } from "react-bootstrap";

// General
type Inputs = {
  adsoyad: string;
  tel: string;
};

// Functions
type KisiDuzenleParams = {
  kisi: Entry<EntryFields>;
  inputs: Inputs;
  iscalled: boolean;
  isfav: boolean;
};

// CMS
type EntryFields = {
  adsoyad: string;
  tel: string;
  slug: string;
  iscalled: boolean;
  isfav: boolean;
};

// Component Props
type KisiDuzenleProps = OffcanvasProps & {
  kisi: Entry<EntryFields>;
};

type KisiDuzenleFormProps = {
  kisi: Entry<EntryFields>;
  handleClose: () => void;
};

type KisiEkleFormProps = {
  handleClose: () => void;
};

type KisiFavProps = {
  kisi: Entry<EntryFields>;
};

type KisiKartProps = OffcanvasProps & {
  kisi: Entry<EntryFields>;
  kisiler: Entry<EntryFields>[];
};

type KisiKayitProps = {
  kisiler: Entry<EntryFields>[];
};

type KisiListeProps = {
  kisiler: Entry<EntryFields>[];
};

type KisiSecenekProps = OffcanvasProps & {
  kisi: Entry<EntryFields>;
};

type KisiSilModalProps = {
  kisi: Entry<EntryFields>;
};

type KisiAvatarProps = {
  kisi: Entry<EntryFields>;
};

type CallCanvasProps = OffcanvasProps & {
  kisi: Entry<EntryFields>;
  kisiler: Entry<EntryFields>[];
};

type LayoutProps = {
  children: React.ReactNode;
};

type PadProps = {
  handleClick: (evt: MouseEvent<HTMLButtonElement>) => void;
  btns: (string | number)[];
  firstIndex: number;
  lastIndex: number;
};

type PadsProps = OffcanvasProps & {
  kisiler: Entry<EntryFields>[];
};

type SearchProps = {
  kisiler: Entry<EntryFields>[];
};

type SonucProps = {
  kisiler: Entry<EntryFields>[];
  query: string;
};

// Page props
type RehberProps = {
  kisiler: Entry<EntryFields>[];
};

type SonProps = {
  kisiler: Entry<EntryFields>[];
};

type FavProps = {
  kisiler: Entry<EntryFields>[];
};

export type {
  Inputs,
  EntryFields,
  KisiDuzenleProps,
  KisiDuzenleFormProps,
  KisiDuzenleParams,
  KisiEkleFormProps,
  KisiFavProps,
  KisiKartProps,
  KisiKayitProps,
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
