import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  color: ${(props) => props.theme.palette.text.primary};
  display: flex;
  border-radius: 10px;
  place-content: center;
`;
