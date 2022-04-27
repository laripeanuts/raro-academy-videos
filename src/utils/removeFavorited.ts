import { VideoType } from "../types/VideoType";

export const favorited = (video: VideoType, list: VideoType[]) => (
  list.reduce((acc, curr) => acc || curr.id === video.id, false)
);

export const removeFavorited = (
  allVideos: VideoType[],
  favorites: VideoType[],
) => allVideos.filter((video) => !favorited(video, favorites));
