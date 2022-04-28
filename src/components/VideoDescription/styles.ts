import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  padding: 16px 0 16px 0;
`;

export const Column = styled("div")`
  display: flex;
  flex-direction: column;
`;

export type RowProps = {
  justifyContent?: string;
  gap?: string;
};

export const Row = styled("div", {
  shouldForwardProp: (prop) => prop !== "justifyContent" && prop !== "gap",
})<RowProps>(({ justifyContent = "flex-start", gap = "20px" }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent,
  gap,
}));
