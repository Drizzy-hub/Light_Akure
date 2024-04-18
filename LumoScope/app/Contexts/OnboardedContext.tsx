import React, { useState, createContext, Dispatch, SetStateAction } from "react";

export interface OnboardUserContextData {
  onboarded: boolean;
  setOnboarded: Dispatch<SetStateAction<boolean>>;
}

export const OnboardUserContext = createContext<OnboardUserContextData | undefined>(undefined);

export const OnboardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [onboarded, setOnboarded] = useState<boolean>(false);

  return (
    <OnboardUserContext.Provider
      value={{ onboarded, setOnboarded }}
    >
      {children}
    </OnboardUserContext.Provider>
  );
};