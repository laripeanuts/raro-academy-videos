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

  .linkLogo {
    background: transparent;
    border: none;
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

    @media only screen and (max-width: 650px) {
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

  .logoText {
    height: 90%;
  }

  @media only screen and (max-width: 650px) {
    padding: 5px 10px;
    gap: 10px;
    justify-content: space-between;

    .logoText {
      display: none;
    }
  }
`;

export const ContainerLogos = styled("div")`
  display: flex;
  flex-direction: row;
  height: 60px;
  align-items: center;
  place-content: center;
  gap: 15px;
  min-width: 50px;

  @media only screen and (max-width: 650px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

export const ContainerLogo = styled("div")`
  height: 100%;
  align-items: center;
  place-content: center;
  stroke: ${(props) => props.theme.palette.primary.contrastText};

  @media only screen and (max-width: 650px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
