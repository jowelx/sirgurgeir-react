import React, { createContext, useState, useEffect } from "react";

type ContextData = {
  login: boolean;
  setLogin: any;
  productsCount: number;
  setProductsCount: any;
};
type ProviderProps = {
  children?: React.ReactNode;
  className?: string;
};
export const AppContext = createContext<ContextData>({
  login: false,
  setLogin: () => {},
  productsCount: 0,
  setProductsCount: () => {},
});
export const AppProvider: React.FC<ProviderProps> = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [productsCount, setProductsCount] = useState(0);
  useEffect(() => {
    // Leer el valor almacenado en el localStorage al cargar el contexto
    const storedValue = localStorage.getItem("login");
    if (storedValue) {
      setLogin(JSON.parse(storedValue));
    }
  }, []);
  return (
    <AppContext.Provider
      value={{
        productsCount,
        setProductsCount,
        setLogin,
        login,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
