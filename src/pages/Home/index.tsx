import { Container } from "./styles"
import { Header } from "../../components/Header";

export const Home = () => {
  return (
    <Container className="Home">
      <Header />
      <img src="/assets/favicon.svg" width="300" alt="Raro Academy Video" />
    </Container>
  );
};

