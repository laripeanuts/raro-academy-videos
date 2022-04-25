import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { VideoType } from "../../types/VideoType";
import {
  Container,
  ContainerComments,
  ContainerPlaylist,
  ContainerVideo,
} from "./styles";

export const VideoPage = () => {
  const { data, hasError, isLoading } = useFetch<VideoType>(
    "/videos/25526467-e9d7-40cb-bc60-76bb85419915",
  );
  const video = { ...data };

  useEffect(() => {
    console.log("vide", video);
    console.log(data);
  }, [isLoading, hasError, data]);

  return (
    <Container className="videoPage">
      <ContainerPlaylist>
        <h1>Playlist</h1>
      </ContainerPlaylist>
      <main className="main">
        <ContainerVideo>
          <h1>{video.nome}</h1>
        </ContainerVideo>
        <ContainerComments>
          <h1>Comentário</h1>
        </ContainerComments>
      </main>
    </Container>
  );
};
