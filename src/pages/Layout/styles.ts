import { styled } from "@mui/material";

export const Background = styled("div")`
  background-color: ${(props) => props.theme.palette.background.default};
  min-height: 100%;
  min-width: 100%;
  z-index: 0;
`;

export const BgLogo = styled("div")`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -23%;
  margin-left: -250px;
  z-index: 1;
  width: 75%;
  fill: ${(props) => props.theme.palette.background.paper};
`;

export const MainContainer = styled("main")`
  min-height: 100%;
  min-width: 100%;
  padding: 90px 40px;
`;
