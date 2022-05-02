import { styled } from "@mui/material/styles";

export const Container = styled("section")`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;

  a {
    text-shadow: 1px 1px 0.5px #000;
    transition: filter 0.2s;
    cursor: pointer;

    &:hover {
      filter: opacity(0.5);
    }
  }
`;
