import { useContext } from "react";
import { useTheme as getTheme } from "@mui/material/styles";
import { ColorModeContext } from "../contexts/ThemeProvider";

export const useTheme = () => {
  const theme = getTheme();
  const modeContext = useContext(ColorModeContext);

  return { theme, toggleTheme: modeContext.toggleColorMode };
};
