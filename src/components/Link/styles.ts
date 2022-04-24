import { Link, styled } from "@mui/material";

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  border: theme.shape.borderRadius,
}));
