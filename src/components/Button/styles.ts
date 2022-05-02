import { Button, styled } from "@mui/material";

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
    backgroundColor: theme.palette.primary.main,
    backgroundOpacity: 0.5,
    color: theme.palette.primary.contrastText,
  },
}));
