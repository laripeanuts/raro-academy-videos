import { styled } from "@mui/material/styles";

/* prettier-ignore */
export const Container = styled("section")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;

  .select-wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      place-self: center;
      justify-self: center;
      color: ${({ theme }) => theme.palette.text.primary};
      opacity: 0.8;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;

export const SearchContainer = styled("section")`
  display: flex;
  width: 400px;
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

export const VideoListContainer = styled("section")`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media only screen and (max-width: 560px) {
    justify-content: center;
  }
`;

export const Row = styled("section")`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: 730px) {
    gap: 20px;
  }
`;
