import { Outlet } from "react-router-dom";
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
      <Footer />
    </Container>
  </ThemeProvider>
);
