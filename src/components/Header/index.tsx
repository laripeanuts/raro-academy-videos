import Typography from "@mui/material/Typography";
import { Container } from "./styles";
import { ThemeSwitch } from "../ThemeSwitch";
import { Navigation } from "../Navigation";

export const Header = () => (
  <Container>
    <Typography variant="h1">Raro Academy Vídeos</Typography>
    <Navigation />
    <ThemeSwitch />
  </Container>
);
