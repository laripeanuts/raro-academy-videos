import { styled } from "@mui/material";
import capeloClaro from "../../assets/capelo_claro.svg";
import capeloEscuro from "../../assets/capelo_escuro.svg";

/* prettier-ignore */
export const MainContainer = styled("main")`
  background-image: ${({ theme }) => (
    `url(${theme.palette.mode === "light" ? capeloClaro : capeloEscuro})`
  )};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 75%;
  background-position: left 125% top 20px;
  min-height: calc(100vh - 160px);
  width: 100%;
  padding: 30px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 850px) {
    background-size: 85%;
  }
  @media only screen and (max-width: 650px) {
    padding: 10px;
    background-size: 90%;
    background-position: left 140% top 60px;
  }

  @media only screen and (max-width: 620px) {
    background-size: 95%;
  }
`;
