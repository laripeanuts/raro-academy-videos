import { StyledStwitch } from "./styles";
import { useTheme } from "../../hooks/useTheme";

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  const handleChange = () => toggleTheme();

  return (
    <StyledStwitch
      disableRipple
      inputProps={{ "aria-label": "Mudar tema" }}
      checked={theme.palette.mode === "dark"}
      onChange={handleChange}
    />
  );
};
