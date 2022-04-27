import { VideoType } from "../types/VideoType";

export const favorited = (id: string, favorites: VideoType[]) => (
  favorites.reduce((acc, curr) => acc || curr.id === id, false)
);

export const removeFavorited = (
  allVideos: VideoType[],
  favorites: VideoType[],
) => allVideos.filter((video) => !favorited(video.id, favorites));
