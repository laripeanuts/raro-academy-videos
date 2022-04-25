import { Outlet } from "react-router-dom";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { MainContainer, BgLogo, Background } from "./styles";
import { Logo } from "../../components/SVG/Logo";

export const Layout = () => (
  <Background>
    <BgLogo>
      <Logo />
    </BgLogo>
    <Header />
    <MainContainer>
      <Outlet />
    </MainContainer>
    <Footer />
  </Background>
);
