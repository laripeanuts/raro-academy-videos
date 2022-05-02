import { styled } from "@mui/material";
import capeloClaro from "../../assets/capelo_claro.svg";
import capeloEscuro from "../../assets/capelo_escuro.svg";

/* prettier-ignore */
export const AppBackground = styled("article")`
  position: relative;
  z-index: 0;
  width: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme.palette.background.default};
  background-image: ${({ theme }) => (
    `url(${theme.palette.mode === "light" ? capeloClaro : capeloEscuro})`
  )};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 75%;
  background-position: left 125% top 20px;

  @media only screen and (max-width: 850px) {
    background-size: 85%;
  }
  @media only screen and (max-width: 650px) {
    background-size: 90%;
    background-position: left 140% top 60px;
  }

  @media only screen and (max-width: 620px) {
    background-size: 95%;
  }
`;
