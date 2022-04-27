import { Link, styled, Typography } from "@mui/material";

type ContainerProps = {
    display: "flex" | "grid";
  };

export const Container = styled("section")<ContainerProps>(
  ({ display }) => (display === "flex"
    ? {
      display: "flex",
      height: "calc(100vh - 180px)",
      alignItems: "center",
      justifyContent: "center",
    }
    : {
      display: "grid",
      gridTemplateAreas: `"greetings . all-favorites"
      "featured featured featured"
      "videos-title . sort-button"
      "all-videos all-videos all-videos"`,
      gridTemplateRows: "repeat(4, auto)",
      gridTemplateColumns: "auto 1fr auto",
      rowGap: "40px",
      padding: "40px 0",
    }),
);

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
