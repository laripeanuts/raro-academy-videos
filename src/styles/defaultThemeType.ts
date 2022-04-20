import "styled-components";

declare module "styled-components" {
  export interface DefaultThemeType {
    title: string;

    border: {
      radius: {
        other: string;
        default: string;
      };
    };

    font: {
      family: {
        plusJakartaSans: string;
      };
      weight: {
        extralight: number;
        light: number;
        normal: number;
        medium: number;
        semibold: number;
        bold: number;
        extrabold: number;
      };
      sizes: {
        xsmall: string;
        small: string;
        medium: string;
        xmedium: string;
        large: string;
        huge: string;
      };
    };
  }
}
