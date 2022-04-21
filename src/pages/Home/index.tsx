import { Container } from "./styles";
import { useAuth } from "../../contexts/AuthProvider/useAuth";

export const Home = () => {
  const { isAuthenticated, user } = useAuth();

  if (isAuthenticated) {
    return (
      <Container>
        <h1>
          Olá mundo,
          {user.nome}
        </h1>
      </Container>
    );
  }
  return (
    <Container className="Home">
      <h2>Home</h2>
      <img src="/assets/favicon.svg" width="300" alt="Raro Academy Video" />
    </Container>
  );
};
