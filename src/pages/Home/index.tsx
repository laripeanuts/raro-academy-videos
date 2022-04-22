import { Container } from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { Navigation } from "../../components/Navigation";

export const Home = () => {
  const { isAuthenticated, user } = useAuth();

  const loggedHome = (
    <h1>
      Olá mundo,
      {user.name}
    </h1>
  );

  return (
    <Container className="Home">
      <h2>Home</h2>
      <Navigation />
      {isAuthenticated && loggedHome}
    </Container>
  );
};
