import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";

import { Header } from "../../components/Header";
import Link from "../../components/Link";
import { ThemeProvider } from "../../contexts/ThemeProvider";
import { Container } from "./styles";

export const Layout = () => (
  <ThemeProvider>
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
      <Link text="link" href="https://www.google.com.br/" />
      <Footer />
    </Container>
  </ThemeProvider>
);
