import { styled } from "@mui/material";

export const ContainerUserMenu = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  place-content: center;
  max-height: 48px;
  .iconArrowDown {
    width: 24px;
  }
  .iconArrowDown:hover {
    cursor: pointer;
    filter: opacity(50%);
  }
`;

export const ContainerMenu = styled("div")`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  gap: 0.2em;

  .theme {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
`;
