import { styled } from "@mui/material";

export const ContainerSearch = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: end;
  width: 30%;
  @media only screen and (max-width: 960px) {
    width: 50%;
  }

  svg {
      font-size: 36px;
      margin-right: 8px;
      color: gray;
  }

`;
