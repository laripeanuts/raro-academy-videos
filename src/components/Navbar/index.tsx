import { useLocation, useNavigate } from "react-router-dom";

import Button from "../Button";
import {
  Container,
  ContainerNav,
  AvatarContainer,
  StyledAvatar,
} from "./styles";
import { ThemeSwitch } from "../ThemeSwitch";
import { useTheme } from "../../hooks/useTheme";
import { userType } from "../../types/userType";

type NavbarProps = {
  user: userType;
  isAuthenticated: boolean;
  logout: () => void;
};

export const Navbar = ({ user, logout, isAuthenticated }: NavbarProps) => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const getHandleClick = (path: string) => () => navigate(path);

  /* prettier-ignore */
  const renderLinks = () => (
    !isAuthenticated ? (
      <>
        <Button
          onClick={getHandleClick("/login")}
          disabled={location.pathname === "/login"}
        >
          Login
        </Button>
        <Button
          onClick={getHandleClick("/register")}
          disabled={location.pathname === "/register"}
        >
          Cadastro
        </Button>
      </>
    ) : (
      <>
        <Button
          onClick={getHandleClick("/videos/favoritos")}
          disabled={location.pathname === "/videos/favoritos"}
        >
          Favoritos
        </Button>
        <Button disabled={false} onClick={logout}>Logout</Button>
      </>
    )
  );

  /* prettier-ignore */
  const renderAvatar = () => (
    isAuthenticated ? (
      <AvatarContainer title={user.nome} arrow>
        <StyledAvatar
          alt={user.nome}
          src={user.foto}
        />
      </AvatarContainer>
    ) : null
  );

  const renderContent = () => (
    <>
      <ContainerNav>
        <Button
          onClick={getHandleClick("/videos")}
          disabled={location.pathname === "/videos"}
        >
          Vídeos
        </Button>
        {renderLinks()}
      </ContainerNav>
      <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
      {renderAvatar()}
    </>
  );

  return <Container className="menu">{renderContent()}</Container>;
};
