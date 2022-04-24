import { useContext } from "react";
import { useTheme as getTheme } from "@mui/material/styles";
import { ToggleThemeContext } from "../contexts/ThemeProvider";

export const useTheme = () => {
  const theme = getTheme();
  const toggleTheme = useContext(ToggleThemeContext);

  return { theme, toggleTheme };
};
