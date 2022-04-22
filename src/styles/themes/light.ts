import { DefaultTheme } from "styled-components";
import { basic } from "./basicTheme";

const light: DefaultTheme = {
  title: "light",

  colors: {
    primary: {
      main: "#343090",
      dark: "#292772",
      light: "#4E47C2",
    },
    secondary: {
      main: "#F5487F",
      dark: "#AB3258",
      light: "#F76C98",
    },
    blue: {
      main: "#343090",
      dark: "#292772",
      darker: "#1c1c44",
      medium: "#4E47C2",
      light: "#7A75D1",
      lighter: "#B5B3E6",
    },
    yellow: {
      main: "#FAC736",
      dark: "#AF8B25",
      light: "#FBD25E",
    },
    black: "#0D0D0D",
    white: "#F5f5f5",
    grayscale: {
      light: "#D8D8D8",
      medium: "#555555",
      dark: "#404040",
    },
    text: {
      primary: "#090909",
      secondary: "#1E1E1E",
      disabled: "#292929",
      hint: "#292929",
    },
    background: {
      default: "#F5f5f5",
      paper: "#FFFFFF",
    },
    error: {
      main: "#ff1010",
    },
    success: {
      main: "#78fa36",
    },
    warning: {
      main: "#FAC736",
    },
  },
  basic,
};

export default light;
