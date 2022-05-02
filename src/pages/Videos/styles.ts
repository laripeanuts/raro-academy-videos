import { styled } from "@mui/material/styles";

/* prettier-ignore */
export const Container = styled("section")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;


  h4 {
    margin-left: 60px;
  }

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

export const VideoListContainer = styled("section")`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const VideoButtonsContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const FilterContainer = styled("section")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  place-content: flex-start;
  padding-left: 20px;
  gap: 20px;
`;
