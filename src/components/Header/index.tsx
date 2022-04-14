
import { Switch } from "@mui/material";

import { useTheme } from "../../contexts/useTheme";

import { Container } from "./styles";


export const Header = () => {
  const { theme, setTheme } = useTheme();


  return (
    <Container>
      <h1>Raro Academy Videos</h1>
      <Switch
        checked={theme.title === "dark"}
        onChange={setTheme}
        defaultChecked
        color="primary"
      />
    </Container>
  );
};