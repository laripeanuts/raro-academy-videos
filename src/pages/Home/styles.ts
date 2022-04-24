import { styled } from "@mui/material";

export const Container = styled("section")`
  background: ${(props) => props.theme.palette.background.default};
  color: ${(props) => props.theme.palette.text.primary};
`;
