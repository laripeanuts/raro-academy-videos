import { styled } from "@mui/material";

export const FooterContainer = styled("footer")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 25px;
  bottom: 0;
  min-width: 100%;
  min-height: 80px;
  position: fixed;
  padding: 20px;

  img {
    height: 40px;
    width: 40px;
    transition: filter 0.2s;

    &:hover{
      filter: opacity(0.5);
    }
  }

`;
