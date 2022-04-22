import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ToggleThemeContext } from "../contexts/ThemeProvider";

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  const toggleTheme = useContext(ToggleThemeContext);

  return { theme, toggleTheme };
};
