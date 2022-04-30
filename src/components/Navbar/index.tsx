import { Link, useNavigate } from "react-router-dom";

import { Avatar, Typography } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import Button from "../Button";
import { Container, ContainerNav } from "./styles";
import { ThemeSwitch } from "../ThemeSwitch";

export const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/");
  };

  const renderNavBar = () => (
    <ContainerNav>
      <Link to="/login">
        <Button disabled={false}>Login</Button>
      </Link>
      <Link to="/register">
        <Button disabled={false}>Cadastro</Button>
      </Link>
      <ThemeSwitch />
    </ContainerNav>
  );

  const renderNavBarAuth = () => (
    <>
      <ContainerNav>
        <Link to="/videos">
          <Button disabled={false}>Vídeos</Button>
        </Link>
        <Link to="/videos/favoritos">
          <Button disabled={false}>Favoritos</Button>
        </Link>
        <Button onClick={() => onLogout()} disabled={false}>
          Logout
        </Button>
      </ContainerNav>
      <ThemeSwitch />
      <Avatar alt={user.nome} src={user.foto} sx={{ width: 56, height: 56 }} />
    </>
  );

  return (
    <Container className="menu">
      {isAuthenticated ? renderNavBarAuth() : renderNavBar()}
    </Container>
  );
};
