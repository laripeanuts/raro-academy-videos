import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  max-height: 80px;
  gap: 20px;

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

  @media only screen and (max-width: 600px) {
    width: 100%;
    gap: 10px;
  }
`;

export const ContainerNav = styled("nav")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    place-content: center;

    button {
      max-height: 20px;
      max-width: 20px;

      text-size: 13px;
    }
  }
`;
