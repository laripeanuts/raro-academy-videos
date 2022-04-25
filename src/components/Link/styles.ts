import { Link, styled } from "@mui/material";

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "0.8rem",
  fontWeight: "bold",
  ":hover": {
    color: theme.palette.primary.main,
  },
}));
