import { styled } from "@mui/material/styles";

export const Container = styled("section")`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 30px;
  min-height: calc(100vh - 160px);
  align-items: center;
  justify-content: center;
`;

export const Row = styled("section")`
  display: flex;
  width: 100%;
  align-items: baseline;
  justify-content: space-between;
`;
