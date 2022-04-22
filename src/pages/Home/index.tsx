import { Container } from "./styles";
import { useAuth } from "../../contexts/AuthProvider/useAuth";
import { Navigation } from "../../components/Navigation";

export const Home = () => {
  const { isAuthenticated, user } = useAuth();

  const loggedHome = (
    <Container>
      <h1>
        Olá mundo,
        {user.nome}
      </h1>
    </Container>
  );

  return (
    <Container className="Home">
      <h2>Home</h2>
      <Navigation />
      {isAuthenticated && loggedHome}
    </Container>
  );
};
