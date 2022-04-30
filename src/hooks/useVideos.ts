import { useContext, useEffect } from "react";
import { VideoType } from "../types/VideoType";
import { VideosContext } from "../contexts/VideosProvider";
import apiClient from "../services/api-client";
import { useFetch } from "./useFetch";
import { useAuth } from "./useAuth";

export const useVideos = (name: String = "") => {
  const context = useContext(VideosContext);
  const { isAuthenticated } = useAuth();
  const { execute, errorMessage, loading } = useFetch(async () => {
    if (isAuthenticated) {
      const [favoritesResponse, allVideosResponse] = await Promise.all([
        apiClient.get<VideoType[]>("/videos/favoritos"),
        apiClient.get<VideoType[]>(
          name !== ""
            ? `/videos?nome=${name}`
            : "/videos",
        ),
      ]);

      context.setFavorites(favoritesResponse.data);
      context.setAllVideos(allVideosResponse.data);
    } else {
      const { data } = await apiClient.get<VideoType[]>("/videos");

      context.setAllVideos(data);
    }
  });

  useEffect(() => {
    if (isAuthenticated) {
      if (!context.favorites.length) {
        execute();
      }
    } else {
      context.setFavorites([]);
    }

    if (!context.allVideos.length) {
      execute();
    }
  }, [isAuthenticated]);

  return { ...context, errorMessage, loading };
};
