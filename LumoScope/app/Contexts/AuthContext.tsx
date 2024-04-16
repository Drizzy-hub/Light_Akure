import React, { useState, createContext } from "react";

export const AuthUserContext = createContext({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Boolean>(false);
  return (
    < AuthUserContext.Provider
      value={{ user, setUser }}
    >
      {children}
    </ AuthUserContext.Provider>
  );
};
