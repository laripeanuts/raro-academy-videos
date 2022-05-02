import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const Container = styled("header")`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  max-height: 80px;
  background: ${(props) => props.theme.palette.secondary.main};
  color: ${(props) => props.theme.palette.primary.contrastText};
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;

  @media only screen and (max-width: 500px) {
    padding: 5px 10px;
    gap: 10px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;

  @media only screen and (max-width: 790px) {
    .logoText {
      display: none;
    }
  }

  @media only screen and (max-width: 500px) {
    .logo {
      width: 50px;
      height: 50px;
    }

    .logoText {
      display: none;
    }
  }
`;
