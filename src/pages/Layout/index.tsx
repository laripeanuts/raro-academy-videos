import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { MainContainer, Background } from "./styles";
import { BGLogo } from "../../components/BGLogo";

export const Layout = () => (
  <Background>
    <BGLogo />
    <Header />
    <MainContainer>
      <Outlet />
    </MainContainer>
    <Footer />
  </Background>
);
