import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: {
        main: string;
        dark: string;
        light: string;
      };
      secondary: {
        main: string;
        dark: string;
        light: string;
      };
      blue: {
        main: string;
        dark: string;
        darker: string;
        medium: string;
        light: string;
        lighter: string;
      };
      yellow: {
        main: string;
        dark: string;
        light: string;
      };
      black: string;
      white: string;
      grayscale: {
        light: string;
        medium: string;
        dark: string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
        hint: string;
      };
      background: {
        default: string;
        paper: string;
      };
      error: {
        main: string;
      };
      success: {
        main: string;
      };
      warning: {
        main: string;
      };
    };
  }
}
