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

export const AllVideosList = styled("section")`
  grid-area: all-videos;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
