import { Login } from "../../components/Login";
import { PassForgotten } from "../../components/PassForgotten";
import { PassRecovery } from "../../components/PassRecovery";
import { Container } from "./styles";

export const LoginPage = () => (
  <Container className="login">
    <h1>Login</h1>
    <Login />
    <h1>Esqueceu a senha</h1>
    <PassForgotten />
    <h1>Recupere a senha</h1>
    <PassRecovery />
  </Container>
);
