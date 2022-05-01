import { PaletteMode } from "@mui/material";
/* prettier-ignore */
import {
  createContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import { ThemeProvider as Provider } from "@mui/material/styles";
import { dark, light } from "./themes";
import { WithChildren } from "../../common/childrenType";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ThemeProvider = ({ children }: WithChildren) => {
  const [mode, setMode] = useState<PaletteMode>("light");
  const theme = useMemo(() => (mode === "dark" ? dark : light), [mode]);

  /* prettier-ignore */
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (
          prevMode === "light" ? "dark" : "light"
        ));
      },
    }),
    [],
  );

  useEffect(() => {
    const storedMode = localStorage.getItem("theme");

    if (storedMode) {
      setMode(() => storedMode as PaletteMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme.palette.mode);
  }, [theme]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <Provider theme={theme}>{children}</Provider>
    </ColorModeContext.Provider>
  );
};
