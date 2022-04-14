import create from "zustand";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

type ThemeContextType = {
  theme: any;
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