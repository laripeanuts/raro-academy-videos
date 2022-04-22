import { createContext, useState } from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import { WithChildren } from "../../common/childrenType";

export const ToggleThemeContext = createContext(() => {});

export const ThemeProvider = ({ children }: WithChildren) => {
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  return (
    <StyledThemeProvider theme={theme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </StyledThemeProvider>
  );
};
