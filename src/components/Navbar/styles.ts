import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";

export const Container = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  width: fit-content;
  max-height: 80px;
  gap: 20px;

  button {
    background: transparent;
    border: none;
    max-width: 150px;
  }

  @media only screen and (max-width: 600px) {
    button {
      padding: 16px 6px;
    }
  }
`;

export const ContainerNav = styled("nav")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media only screen and (max-width: 600px) {
    justify-content: space-around;
  }
`;

export const AvatarContainer = styled(Tooltip)`
  @media only screen and (max-width: 425px) {
    display: none;
  }
`;

export const StyledAvatar = styled(Avatar)`
  width: 56px;
  height: 56px;

  @media only screen and (max-width: 500px) {
    width: 50px;
    height: 50px;
  }
`;
