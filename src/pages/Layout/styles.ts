import { styled } from "@mui/material";

export const Background = styled("div")`
  height: 100%;
  min-width: 100%;
`;

export const MainContainer = styled("main")`
  min-height: 100vh;
  min-width: 100%;
  padding: 0 30px;

  @media only screen and (max-width: 650px) {
    padding: 10px;
  }
`;
