import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "0.8rem",
  fontWeight: "bold",
  ":hover": {
    color: theme.palette.primary.main,
  },
}));
