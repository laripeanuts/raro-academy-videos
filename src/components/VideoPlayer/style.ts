import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  width: 100%;
  margin-bottom: 10px;
  height: 100%;
  color: ${(props) => props.theme.palette.text.primary};
  display: flex;
  border-radius: 10px;
  place-content: center;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;
