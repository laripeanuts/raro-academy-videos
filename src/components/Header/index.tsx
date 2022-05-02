import { Container, StyledLink } from "./styles";
import { Logo } from "../SVG/Logo";
import { LogoText } from "../SVG/LogoText";
import { useAuth } from "../../hooks/useAuth";
import { Navbar } from "../Navbar";

export const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <Container>
      <StyledLink to="/">
        <Logo className="logo" fill="#FFF" />
        <LogoText className="logoText" fill="#FFF" />
      </StyledLink>
      <Navbar user={user} isAuthenticated={isAuthenticated} logout={logout} />
    </Container>
  );
};
