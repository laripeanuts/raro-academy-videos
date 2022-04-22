import { Container } from "./styles";
import { ThemeSwitch } from "../ThemeSwitch";
import { Navigation } from "../Navigation";

export const Header = () => (
  <Container>
    <h1>Raro Academy Videos</h1>
    <Navigation />
    <ThemeSwitch />
  </Container>
);
