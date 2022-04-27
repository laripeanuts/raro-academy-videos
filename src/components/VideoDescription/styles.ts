import { Button, styled } from "@mui/material";
import { rgba } from "polished";

export type StyledRowProps = {
  aligncontent: string;
};

export const Container = styled("div")(({ theme }) => ({
  padding: "16px 0 16px 0",
}));

export const StyledColumn = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const StyledRow = styled("div")<StyledRowProps>(
  ({ theme, aligncontent }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: aligncontent,
  }),
);
