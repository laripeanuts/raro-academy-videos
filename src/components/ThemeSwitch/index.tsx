import { useTheme } from "../../contexts/useTheme";
import { StyledStwitch } from "./styles";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = () => setTheme();

  return (
    <StyledStwitch
      disableRipple
      inputProps={{ "aria-label": "Mudar tema" }}
      checked={theme.title === "dark"}
      onChange={handleChange}
    />
  );
};
