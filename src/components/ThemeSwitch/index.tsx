import { memo } from "react";
import { Theme } from "@mui/material/styles";
import { StyledStwitch } from "./styles";

type ThemeSwitchProps = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeSwitch = memo(({ theme, toggleTheme }: ThemeSwitchProps) => {
  const handleChange = () => {
    toggleTheme();
  };

  return (
    <StyledStwitch
      disableRipple
      inputProps={{ "aria-label": "Mudar tema" }}
      checked={theme.palette.mode === "dark"}
      onChange={handleChange}
    />
  );
});
