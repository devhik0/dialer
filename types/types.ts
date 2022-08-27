import { Entry } from "contentful";
import { MouseEvent } from "react";
import { OffcanvasProps } from "react-bootstrap";

// todo: burayı generic type yap type kisi = Entry.EntryFields...  -> type ... { kisi: K, kisiler: K[]}

// General
type Inputs = {
  adsoyad: string;
  tel: string;
};

// Utils
type Input = { adsoyad: string };

type Data = string | Input;

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

// Kisi Component Props
type KisiAvatarProps = {
  kisi: Entry<EntryFields>;
};

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

type KisiFavSilModalProps = {
  kisi: Entry<EntryFields>;
};

type KisiKartProps = OffcanvasProps & {
  kisi: Entry<EntryFields>;
  kisiler: Entry<EntryFields>[];
};

type KisiKayitProps = {
  kisiler: Entry<EntryFields>[];
};

type KisiKayitSilModalProps = {
  kisi: Entry<EntryFields>;
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

// Layout components
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
