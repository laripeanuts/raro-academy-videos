import { styled } from "@mui/material";

export const Background = styled("div")`
  background-color: ${(props) => props.theme.palette.background.default};
  min-height: 100%;
  min-width: 100%;
  position: relative;
  z-index: -5;
`;

export const MainContainer = styled("main")`
  min-height: 100%;
  min-width: 100%;
  padding: 90px 40px;
  position: relative;
  z-index: 0;
`;
