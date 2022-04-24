import { Button, styled } from "@mui/material";
import { rgba } from "polished";

export const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: 16,
  border: theme.shape.borderRadius,
  ":hover": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.contrastText,
  },
  ":disabled": {
    backgroundColor: rgba(theme.palette.primary.main, 0.5),
    color: theme.palette.primary.contrastText,
  },
}));
