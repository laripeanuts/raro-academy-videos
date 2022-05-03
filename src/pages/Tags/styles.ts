import { Link, styled, Typography } from "@mui/material";

export const Container = styled("section")`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

export const AllFavoritesLink = styled(Link)`
  grid-area: all-favorites;
  display: flex;
  align-items: flex-end;
`;

export const AllVideosTitle = styled(Typography)`
  grid-area: videos-title;
`;

export const VideoListContainer = styled("section")`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media only screen and (max-width: 560px) {
    justify-content: center;
  }
`;
