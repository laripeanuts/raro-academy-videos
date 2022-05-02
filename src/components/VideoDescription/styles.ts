import { styled } from "@mui/material/styles";

export const Container = styled("section")`
  padding: 15px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
