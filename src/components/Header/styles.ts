import { styled } from "@mui/material/styles";

export const Container = styled("header")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px 10px 20px;
  max-height: 80px;
  background: ${(props) => props.theme.palette.secondary.main};
  color: ${(props) => props.theme.palette.primary.contrastText};

  svg {
    fill: ${(props) => props.theme.palette.primary.contrastText};
    width: 100%;
    height: 100%;
  }

  button {
    background: transparent;
    border: none;
    max-width: 150px;
    &:hover {
      svg {
        filter: drop-shadow(3px 3px 0px rgb(0 0 0 / 0.2));
      }
    }
  }
`;

export const ContainerLogos = styled("div")`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ContainerLogo = styled("div")`
  max-width: 85px;
  stroke-width: 15px;
  stroke: ${(props) => props.theme.palette.primary.contrastText};
`;

export const ContainerUserMenu = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  place-content: center;
  max-height: 48px;
  gap: 8px;

  .iconArrowDown {
    width: 24px;
  }
`;

export const ContainerAvatar = styled("div")`
  background: red;
  height: 48px;
  min-width: 48px;
  border-radius: 50%;
  margin-left: 50px;
  background: ${(props) => props.theme.palette.secondary.contrastText};

  svg {
    fill: ${(props) => props.theme.palette.secondary.main};
    padding: 7px;
  }
`;
