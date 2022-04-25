import { Link } from "react-router-dom";
import { Container, ContainerLogo, ContainerLogos } from "./styles";
import { Logo } from "../SVG/Logo";
import { LogoCompact } from "../SVG/LogoCompact";
import { InputSearch } from "../InputSearch";
import { ThemeSwitch } from "../ThemeSwitch";
import { useAuth } from "../../hooks/useAuth";
import { AccountMenu } from "../AccountMenu";
import Button from "../Button";

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
      <div className="menu">
        <InputSearch />
        {isAuthenticated ? (
          <AccountMenu />
        ) : (
          <div className="menuUser">
            <Link to="/login">
              <Button disabled={false}>Login</Button>
            </Link>
            <Link to="/register">
              <Button disabled={false}>Cadastro</Button>
            </Link>

            <ThemeSwitch />
          </div>
        )}
      </div>
    </Container>
  );
};
