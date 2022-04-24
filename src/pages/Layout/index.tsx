import { Outlet } from "react-router-dom";
import Button from "../../components/Button";
import { StyledButton } from "../../components/Button/styles";
import { Footer } from "../../components/Footer";

import { Header } from "../../components/Header";
import { ThemeProvider } from "../../contexts/ThemeProvider";
import { Container } from "./styles";

export const Layout = () => (
  <ThemeProvider>
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
      <Button text="botão" />
      <Footer />
    </Container>
  </ThemeProvider>
);
