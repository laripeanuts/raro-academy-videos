import { styled } from "@mui/material";

export const ContainerSearch = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: end;
  width: 500px;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  svg {
    font-size: 36px;
    margin-right: 8px;
    color: ${(props) => props.theme.palette.text.primary};
    opacity: 0.8;
  }
`;
