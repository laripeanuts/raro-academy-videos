import { createContext, useState } from "react";
import { VideosState } from "./types";
import { WithChildren } from "../../common/childrenType";
import { VideoType } from "../../types/VideoType";

export const VideosContext = createContext<VideosState>({
  allVideos: [],
  favorites: [],
  watching: null,
  setAllVideos: () => null,
  setFavorites: () => null,
  setWatching: () => null,
});

export const VideosProvider = ({ children }: WithChildren) => {
  const [allVideos, setAllVideos] = useState<VideoType[]>([]);
  const [favorites, setFavorites] = useState<VideoType[]>([]);
  const [watching, setWatching] = useState<VideoType | null>(null);

  return (
    <VideosContext.Provider
      value={{
        allVideos,
        favorites,
        watching,
        setAllVideos,
        setFavorites,
        setWatching,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};
