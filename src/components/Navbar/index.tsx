import { Link } from "react-router-dom";

import { Avatar, Typography } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import Button from "../Button";
import { Container, ContainerNav } from "./styles";

export const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();

  const renderNavBar = () => (
    <ContainerNav>
      <Link to="/login">
        <Button disabled={false}>Login</Button>
      </Link>

      <Link to="/register">
        <Button disabled={false}>Cadastro</Button>
      </Link>
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

        <Button onClick={logout} disabled={false}>
          Logout
        </Button>

        {/* <Typography variant="subtitle1">{user.nome}</Typography> */}
      </ContainerNav>
      <Avatar alt={user.nome} src={user.foto} sx={{ width: 56, height: 56 }} />
    </>
  );

  return (
    <Container className="menu">
      {isAuthenticated ? renderNavBarAuth() : renderNavBar()}
    </Container>
  );
};
