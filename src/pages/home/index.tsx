import { Container } from "./styles"
import { Header } from "../../components/Header";

export const Home = () => {
  return (
    <Container className="Home">
      <Header />
      <img src="/assets/logo-semfundo.webp" alt="Raro Academy Video" />
    </Container>
  );
};

