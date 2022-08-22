import { createContext, ReactNode } from "react";

type KCProps = {
  children: ReactNode;
};

const kisiler = [
  { ad: "hikmet", soyad: "aydın" },
  { ad: "ahmet", soyad: "çelik" },
];

export const KisilerContext = createContext(kisiler);

const KisilerContextProvider = ({ children }: KCProps) => {
  return <KisilerContext.Provider value={kisiler}>{children}</KisilerContext.Provider>;
};

export default KisilerContextProvider;
