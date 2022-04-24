import { PaletteMode } from "@mui/material";
import { createTheme, ThemeOptions } from "@mui/material/styles";

const getThemeOptions = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: "#F5487F",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#343090",
      contrastText: "#FFF",
    },
    error: {
      main: "#FF1010",
      contrastText: "#FFF",
    },
    background: {
      default: mode === "dark" ? "#121212" : "#f2f2f2",
      paper: mode === "dark" ? "#1c1c1c" : "#d9d9d9",
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    allVariants: {
      fontFamily: "'Plus Jakarta Sans', 'Open Sans', 'Helvetica', sans-serif",
      color: "#FFF",
    },
    h1: {
      fontSize: "3.5rem",
      fontWeight: "Bold",
    },
    h2: {
      fontSize: "2.625rem",
      fontWeight: "SemiBold",
    },
    h3: {
      fontSize: "2.125rem",
      fontWeight: "SemiBold",
      color: mode === "dark" ? "#FFF" : "#131313",
    },
    h4: {
      fontSize: "1.625rem",
      fontWeight: "SemiBold",
      color: mode === "dark" ? "#FFF" : "#131313",
    },
    h5: {
      fontSize: "1.313rem",
      fontWeight: "Bold",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: "Bold",
    },
    body1: {
      color: mode === "dark" ? "#FFF" : "#131313",
    },
    body2: {
      fontSize: "0.813rem",
      lineHeight: 1.5,
      color: mode === "dark" ? "#FFF" : "#404040",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: mode === "dark" ? "#FFF" : "#404040",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          boxShadow: "none",
          backgroundColor: "#F5487F",
          color: "#FFF",
          fontWeight: "Bold",
          fontSize: "0.813rem",
          textTransform: "initial",
          lineHeight: 1.5,
          height: "40px",
          padding: "0 30px",
          "&:hover": {
            backgroundColor: "#F5487F",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderRadius: 0,
            border: "none",
            borderBottom: "1px solid #FFF",
          },
          "& .MuiInputBase-input, & .MuiInputLabel-root": {
            color: "#FFF",
            padding: "5px 15px",
            height: "40px",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          borderBottom: "none",
          width: "100%",
          boxShadow:
            "inset 3px 3px 10px rgba(0, 0, 0, 0.2), inset -1px -1px rgba(255, 255, 255, 0.3)",
          "&::before, &::after, &:hover:not(.Mui-disabled):before": {
            border: "none",
          },
        },
        input: {
          height: "40px",
          padding: "0 15px",
        },
      },
    },
  },
});

export const dark = createTheme(getThemeOptions("dark"));

export const light = createTheme(getThemeOptions("light"));
