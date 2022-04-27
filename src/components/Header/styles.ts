import { styled } from "@mui/material/styles";

export const Container = styled("header")`
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  max-height: 80px;
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

  .navbar {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    gap: 20px;

    @media only screen and (max-width: 600px) {
      gap: 5px;
    }
  }

  .menuUser {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    gap: 20px;
  }

  @media only screen and (max-width: 600px) {
    padding: 5px 10px;
    gap: 10px;
    justify-content: space-between;
  }
`;

export const ContainerLogos = styled("div")`
  display: flex;
  align-items: center;
  place-content: center;
  gap: 15px;

  @media only screen and (max-width: 600px) {
    width: 80px;
    display: flex;
    gap: 5px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ContainerLogo = styled("div")`
  max-width: 85px;
  align-items: center;
  place-content: center;
  stroke: ${(props) => props.theme.palette.primary.contrastText};

  @media only screen and (max-width: 600px) {
    width: 50%;
    flex-wrap: wrap;
  }
`;
