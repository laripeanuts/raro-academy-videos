import { Outlet } from "react-router-dom";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MainContainer } from "./styles";
import { VideosProvider } from "../../contexts/VideosProvider";

export const Layout = () => (
  <VideosProvider>
    <Header />
    <MainContainer>
      <Outlet />
    </MainContainer>
    <Footer />
  </VideosProvider>
);
