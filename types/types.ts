import { Entry } from "contentful";
import { MouseEvent } from "react";
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

export type {
  EntryFields,
  KisiDuzenleProps,
  KisiKartProps,
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
};
