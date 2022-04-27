import { Link } from "react-router-dom";
import { Container, ContainerLogo, ContainerLogos } from "./styles";
import { Logo } from "../SVG/Logo";
import { LogoCompact } from "../SVG/LogoCompact";
import { ThemeSwitch } from "../ThemeSwitch";
import { useAuth } from "../../hooks/useAuth";
import { Navbar } from "../Navbar";

export const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Container>
      <ContainerLogos>
        <ContainerLogo>
          <Logo />
        </ContainerLogo>
        <Link to="/">
          <button type="button">
            <LogoCompact />
          </button>
        </Link>
      </ContainerLogos>
      <div className="menuUser">
        <div className="navbar">
          <Navbar />
        </div>
        <ThemeSwitch />
      </div>
    </Container>
  );
};
