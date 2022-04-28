import { styled } from "@mui/material";

export const Background = styled("div")`
  min-width: 100%;
`;

export const MainContainer = styled("main")`
  min-height: calc(100vh - 160px);
  width: 100%;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 650px) {
    padding: 10px;
  }
`;
