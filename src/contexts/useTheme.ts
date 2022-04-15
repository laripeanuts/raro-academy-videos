import create from "zustand";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import { DefaultTheme } from "styled-components";

type ThemeContextType = {
  theme: DefaultTheme;
  setTheme: () => void;
};

export const useTheme = create<ThemeContextType>((set) => ({
  theme: light,
  setTheme: () => {
    set((state) => ({
      theme: state.theme === light ? dark : light,
    }));
  },
}));