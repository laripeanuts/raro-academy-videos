import { Outlet } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { useTheme } from "../../contexts/useTheme";

import { Header } from "../../components/Header";
import Link from "../../components/Link";

export const Layout = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Link text="link" href="https://www.google.com.br/" />
    </ThemeProvider>
  );
};
