import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header";
import { ThemeProvider } from "../../contexts/ThemeProvider";

export const Layout = () => (
  <ThemeProvider>
    <Header />
    <main>
      <Outlet />
    </main>
  </ThemeProvider>
);
