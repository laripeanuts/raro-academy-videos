import { PassRecovery } from "../../components/PassRecovery";
import { Container } from "./styles";

export const PassRecoveryPage = () => (
  <Container className="login">
    <h1>Recupere a senha</h1>
    <PassRecovery />
  </Container>
);
