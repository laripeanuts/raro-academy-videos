import { Container } from "./styles";
import { useAuth } from "../../hooks/useAuth";

export const Home = () => {
  const { isAuthenticated, user } = useAuth();

  const loggedHome = (
    <h1>
      Olá mundo,
      {user.nome}
    </h1>
  );

  return (
    <Container className="Home">
      <h2>Home</h2>
      {isAuthenticated && loggedHome}
    </Container>
  );
};
