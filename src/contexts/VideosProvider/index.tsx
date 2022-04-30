import { createContext, useEffect, useState } from "react";
import { VideosState } from "./types";
import { WithChildren } from "../../common/childrenType";
import { VideoType } from "../../types/VideoType";
import { useAuth } from "../../hooks/useAuth";
import apiClient from "../../services/api-client";
import { useFetch } from "../../hooks/useFetch";

export const VideosContext = createContext<VideosState>({
  allVideos: [],
  favorites: [],
  watching: null,
  setAllVideos: () => null,
  setFavorites: () => null,
  setWatching: () => null,
  setLoading: () => null,
  loading: true,
  errorMessage: "",
  getDataFromApi: () => Promise.resolve(),
});

export const VideosProvider = ({ children }: WithChildren) => {
  const [allVideos, setAllVideos] = useState<VideoType[]>([]);
  const [favorites, setFavorites] = useState<VideoType[]>([]);
  const [watching, setWatching] = useState<VideoType | null>(null);
  const { isAuthenticated } = useAuth();
  const {
    execute,
    errorMessage,
    loading,
    setLoading,
  } = useFetch(async () => {
    if (isAuthenticated) {
      const [favoritesResponse, allVideosResponse] = await Promise.all([
        apiClient.get<VideoType[]>("/videos/favoritos"),
        apiClient.get<VideoType[]>("/videos"),
      ]);
      setFavorites(favoritesResponse.data);
      setAllVideos(allVideosResponse.data);
    } else {
      const { data } = await apiClient.get<VideoType[]>("/videos");

      setFavorites([]);
      setAllVideos(data);
    }
  });

  useEffect(() => {
    execute();
  }, [isAuthenticated]);

  return (
    <VideosContext.Provider
      value={{
        allVideos,
        favorites,
        watching,
        setAllVideos,
        setFavorites,
        setWatching,
        setLoading,
        loading,
        errorMessage,
        getDataFromApi: execute,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};
