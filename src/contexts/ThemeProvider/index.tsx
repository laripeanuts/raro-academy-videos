import { createContext, useEffect, useState } from "react";
import { ThemeProvider as Provider } from "@mui/material/styles";
import { dark, light } from "./themes";
import { WithChildren } from "../../common/childrenType";

export const ToggleThemeContext = createContext(() => {});

export const ThemeProvider = ({ children }: WithChildren) => {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.palette.mode === "dark" ? light : dark);
  };

  useEffect(() => {
    const storageTheme = localStorage.getItem("theme");

    if (storageTheme) {
      setTheme(storageTheme === "dark" ? dark : light);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme.palette.mode);
  }, [theme]);

  return (
    <Provider theme={theme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </Provider>
  );
};
