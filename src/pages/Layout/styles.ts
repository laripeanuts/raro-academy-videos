import { styled } from "@mui/material";

/* prettier-ignore */
export const MainContainer = styled("main")`
  
  min-height: calc(100vh - 160px);
  padding: 30px;
  display: flex;
  width: 100%;
  justify-content: center;

  @media only screen and (max-width: 500px) {
    min-height: calc(100vh - 120px);
  }
`;
