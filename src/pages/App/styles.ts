import { styled } from "@mui/material";

export const AppBackground = styled("div")`
  background: ${(props) => props.theme.palette.background.default};
  position: relative;
  z-index: 0;
  min-height: 100%;
  min-width: 100%;
`;
