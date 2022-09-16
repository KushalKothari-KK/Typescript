import { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

// theme initial value
export const ThemeContext = createContext(theme);

// {children} to destructure
export const ThemeContextProvider = ({children,}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
