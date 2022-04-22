import { Container, ContainerLogo, ContainerLogos } from "./styles";
import { SwitchComponent } from "../SwitchComponent";
import { Logo } from "../SVG/Logo";
import { LogoCompact } from "../SVG/LogoCompact";

export const Header = () => (
  <Container>
    <ContainerLogos>
      <ContainerLogo>
        <Logo />
      </ContainerLogo>
      <LogoCompact />
    </ContainerLogos>
    <SwitchComponent />
  </Container>
);
