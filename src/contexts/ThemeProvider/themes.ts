import { PaletteMode } from "@mui/material";
import { purple } from "@mui/material/colors";
import { createTheme, ThemeOptions } from "@mui/material/styles";

const white: string = "#F2F2F2";
const grey: string = "#404040";
const black: string = "#0d0d0d";
const pink: string = "#F5487F";
const blue: string = "#343090";
const red: string = "#FF1010";
const yellow: string = "#FAC736";

const getThemeOptions = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    common: {
      black: "#0d0d0d",
      white: "#F2F2F2",
    },
    primary: {
      main: pink,
      contrastText: white,
    },
    secondary: {
      main: blue,
      contrastText: white,
    },
    error: {
      main: red,
      contrastText: white,
    },
    warning: {
      main: yellow,
      contrastText: white,
    },
    background: {
      default: mode === "dark" ? black : white,
      paper: mode === "dark" ? "#1c1c1c" : "#d9d9d9",
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    allVariants: {
      fontFamily: "'Plus Jakarta Sans', 'Open Sans', 'Helvetica', sans-serif",
      color: mode === "dark" ? white : black,
    },
    h1: {
      fontSize: "3.5rem",
      fontWeight: "Bold",
    },
    h2: {
      fontSize: "2.625rem",
      fontWeight: "SemiBold",
      color: mode === "dark" ? white : black,
    },
    h3: {
      fontSize: "2.125rem",
      fontWeight: "SemiBold",
      color: mode === "dark" ? white : black,
    },
    h4: {
      fontSize: "1.625rem",
      fontWeight: "SemiBold",
      color: mode === "dark" ? white : black,
    },
    h5: {
      fontSize: "1.313rem",
      fontWeight: "Bold",
      color: mode === "dark" ? white : black,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: "Bold",
      color: mode === "dark" ? white : black,
    },
    subtitle1: {
      fontSize: ".75rem",
      fontWeight: 300,
      color: mode === "dark" ? white : black,
    },
    subtitle2: {
      fontSize: ".8rem",
      fontWeight: 800,
      color: mode === "dark" ? white : black,
    },
    body1: {
      fontSize: "0.813rem",
      color: white,
      textShadow: "0.5px 0.5px 1px #000000a3",
    },
    body2: {
      fontSize: "0.813rem",
      lineHeight: 1.5,
      color: white,
      opacity: 0.8,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: mode === "dark" ? white : grey,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          boxShadow: "none",
          backgroundColor: pink,
          color: white,
          fontWeight: "Bold",
          fontSize: "0.813rem",
          textTransform: "initial",
          lineHeight: 1.5,
          height: "40px",
          padding: "0 30px",
          "&:hover": {
            backgroundColor: pink,
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
            borderBottom: `1px solid ${white}`,
          },
          "& .MuiInputBase-input, & .MuiInputLabel-root": {
            color: white,
            padding: "5px 15px",
            height: "40px",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          marginTop: "22px",
          borderRadius: "10px",
          borderBottom: "none",
          background: mode === "dark" ? black : white,
          width: "100%",
          boxShadow:
            "inset 3px 3px 10px rgba(0, 0, 0, 0.2), inset -1px -1px rgba(255, 255, 255, 0.3)",
          "&::before, &::after, &:hover:not(.Mui-disabled):before": {
            border: "none",
          },
          ":error": {
            background: pink,
            height: "40px",
          },
        },
        input: {
          height: "40px",
          padding: "0 15px",
          ":focus": {
            borderRadius: "10px",
            outline: "1px solid",
            outlineColor: pink,
          },
        },
      },
    },
  },
});

export const dark = createTheme(getThemeOptions("dark"));

export const light = createTheme(getThemeOptions("light"));
