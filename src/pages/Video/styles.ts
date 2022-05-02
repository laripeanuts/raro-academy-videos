import { styled } from "@mui/material";

export const Container = styled("section")`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    "video comments"
    "video comments"
    "playlist playlist"
    "loading loading";

  @media only screen and (max-width: 950px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }
`;

export const ContainerVideo = styled("section")`
  width: 100%;
  height: 100%;
  grid-area: video;
`;

export const ContainerComments = styled("section")`
  width: 100%;
  height: 100%;
  grid-area: comments;
`;

export const ContainerPlaylist = styled("section")`
  width: 100%;
  height: 100%;
  grid-area: playlist;
`;

export const ContainerLoading = styled("div")`
  grid-area: loading;
  display: flex;
  justify-content: center;
  align-items: center;
`;
