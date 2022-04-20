import { Container } from "./styles";
import { SwitchComponent } from "../SwitchComponent";
import { Navigation } from "../Navigation";

export const Header = () => (
  <Container>
    <h1>Raro Academy Videos</h1>
    <SwitchComponent />
    <Navigation />
  </Container>
);
