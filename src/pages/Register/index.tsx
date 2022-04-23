import { Register } from "../../components/Register";
import { Container } from "./styles";

export const RegisterPage = () => (
  <Container className="register">
    <h1>Cadastro novo usuário</h1>
    <Register />
  </Container>
);
