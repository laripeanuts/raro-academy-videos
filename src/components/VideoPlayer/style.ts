import { styled } from "@mui/material/styles";

export const Container = styled("article")`
  margin-bottom: 10px;
  height: 100%;
  width: 100%;
  color: ${(props) => props.theme.palette.text.primary};
  display: flex;
  border-radius: 10px;
  place-content: center;
`;
