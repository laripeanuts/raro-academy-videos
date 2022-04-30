import { Link } from "react-router-dom";
import { Container, ContainerLogo, ContainerLogos } from "./styles";
import { Logo } from "../SVG/Logo";
import { LogoCompact } from "../SVG/LogoCompact";
import { useAuth } from "../../hooks/useAuth";
import { Navbar } from "../Navbar";

export const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Container>
      <Link className="linkLogo" to="/">
        <ContainerLogos>
          <ContainerLogo>
            <Logo className="logo" />
          </ContainerLogo>
          <div className="logoText">
            <LogoCompact />
          </div>
        </ContainerLogos>
      </Link>
      <div className="menuUser">
        <div className="navbar">
          <Navbar />
        </div>
      </div>
    </Container>
  );
};
