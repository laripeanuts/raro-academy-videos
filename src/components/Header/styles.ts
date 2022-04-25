import { styled } from "@mui/material/styles";

export const Container = styled("header")`
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px 10px 20px;
  /* max-height: 80px; */
  background: ${(props) => props.theme.palette.secondary.main};
  color: ${(props) => props.theme.palette.primary.contrastText};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  svg {
    fill: ${(props) => props.theme.palette.primary.contrastText};
    width: 100%;
    height: 100%;
    transition: filter 0.2s;
  }

  button {
    background: transparent;
    border: none;
    max-width: 150px;
    &:hover {
      svg {
        filter: drop-shadow(3px 3px 0px rgb(0 0 0 / 0.2));
        filter: opacity(50%);
      }
    }
  }

  .menu {
    display: flex;
    flex-direction: row;
    place-content: center;
    justify-content: end;
    flex-wrap: wrap;
    gap: 20px;
    place-content: center;
  }

  .menuUser {
    display: flex;
    flex-direction: row;
    align-items: center;
    place-content: center;
    flex-wrap: wrap;
    gap: 1.5em;
  }
`;

export const ContainerLogos = styled("div")`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  place-content: center;
  gap: 15px;
`;

export const ContainerLogo = styled("div")`
  max-width: 85px;
  align-items: center;
  place-content: center;
  stroke-width: 15px;
  stroke: ${(props) => props.theme.palette.primary.contrastText};
`;
