import { Dispatch, SetStateAction } from "react";
import { VideoType } from "../../types/VideoType";

export type VideosState = {
  allVideos: VideoType[];
  favorites: VideoType[];
  watching: VideoType | null;
  setAllVideos: Dispatch<SetStateAction<VideoType[]>>;
  setFavorites: Dispatch<SetStateAction<VideoType[]>>;
  setWatching: Dispatch<SetStateAction<VideoType | null>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  errorMessage: string;
  getDataFromApi: () => Promise<void>;
  topics: string[];
};
