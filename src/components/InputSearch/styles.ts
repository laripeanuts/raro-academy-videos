import { styled } from "@mui/material";

export const ContainerSearch = styled("section")`
  display: flex;
  width: 500px;
  align-items: center;

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
