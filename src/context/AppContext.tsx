import React, { createContext, useState } from 'react';

type ContextData = {
    login: boolean;
    setLogin: any;
}
type ProviderProps = {
  children?: React.ReactNode;
  className?: string;
}
export const AppContext = createContext<ContextData>({
  login:false,
  setLogin: () => { },
    
});
export const AppProvider: React.FC<ProviderProps> = ({ children }) => {
const [login,setLogin]=useState(false)
    return (
      <AppContext.Provider
        value={{
          setLogin,
          login,
        }}
      >
        {children}
      </AppContext.Provider>
    );
};