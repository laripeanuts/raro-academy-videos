import { createContext, useEffect, useState } from "react";
import { ThemeProvider as Provider } from "@mui/material/styles";
import { dark, light } from "./themes";
import { WithChildren } from "../../common/childrenType";

export const ToggleThemeContext = createContext(() => {});

export const ThemeProvider = ({ children }: WithChildren) => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.palette.mode === "dark" ? light : dark);
  };

  useEffect(() => {
    const thereIsTheme = localStorage.getItem("theme");
    if (thereIsTheme) {
      if (theme.palette.mode === thereIsTheme) toggleTheme();
    }
  }, []);

  return (
    <Provider theme={theme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </Provider>
  );
};
