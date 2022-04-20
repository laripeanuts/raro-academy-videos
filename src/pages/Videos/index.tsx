import { useEffect, useState } from "react";
import { VideoType } from "../../types/VideoType";
import { Container } from "./styles";

import apiClient from "../../services/api-client";

export const VideosPage = () => {
  const [videos, setVideos] = useState<VideoType[]>([]);

  useEffect(() => {
    async function loadVideos() {
      const response = await apiClient.get<VideoType[]>("/videos");
      setVideos(response.data);
    }

    loadVideos();
  }, []);

  return (
    <Container className="notfound">
      <h1>Videos Page</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <h2>{video.nome}</h2>
          </li>
        ))}
      </ul>
    </Container>
  );
};
