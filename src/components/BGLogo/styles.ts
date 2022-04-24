import { styled } from "@mui/material";

export const ContainerLogo = styled("div")`
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
