import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Background, BgLogo, BodyContainer } from "./styles";
import { Logo } from "../../components/SVG/Logo";

export const Layout = () => (
  <Background>
    <BodyContainer>
      <Header />
      <Outlet />
      <Footer />
      <BgLogo>
        <Logo />
      </BgLogo>
    </BodyContainer>
  </Background>
);
