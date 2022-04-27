import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import { AllVideosList, AllVideosTitle, Container } from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { useFetch } from "../../hooks/useFetch";
import { useVideos } from "../../hooks/useVideos";
import { FavoriteButton } from "../../components/FavoriteButton";
import { Thumbnail } from "../../components/Thumbnail";
import apiClient from "../../services/api-client";
import { VideoType } from "../../types/VideoType";

export const VideosPage = () => {
  const { allVideos, setAllVideos, setFavorites } = useVideos();
  const { isAuthenticated } = useAuth();
  const { execute, errorMessage, loading } = useFetch(async () => {
    if (isAuthenticated) {
      const [favoritesResponse, allVideosResponse] = await Promise.all([
        apiClient.get<VideoType[]>("/videos/favoritos"),
        apiClient.get<VideoType[]>("/videos"),
      ]);
      setAllVideos(allVideosResponse.data);
    } else {
      const { data } = await apiClient.get<VideoType[]>("/videos");

      setAllVideos(data);
    }
  });

  useEffect(() => {
    execute();
  }, [isAuthenticated]);

  const renderAllVideos = () => (
    <AllVideosList>
      {allVideos.map((video) => (
        <Thumbnail
          videoId={video.id}
          name={video.nome}
          tumbnail={video.thumbUrl}
          publishedAt={new Date(video.dataPublicacao).toLocaleDateString(
            "pt-br",
          )}
          key={video.id}
        >
          <FavoriteButton id={video.id} title="Favoritar" />
        </Thumbnail>
      ))}
    </AllVideosList>
  );

  const renderPageContent = () => {
    if (loading) {
      return <CircularProgress aria-label="Carregando conteúdo" size={60} />;
    }

    if (errorMessage.length) {
      <Typography variant="h5">{errorMessage}</Typography>;
    }

    return (
      <>
        <AllVideosTitle variant="h4">Todos os vídeos</AllVideosTitle>
        {renderAllVideos()}
      </>
    );
  };

  return (
    <Container display={loading || !!errorMessage.length ? "flex" : "grid"}>
      {renderPageContent()}
    </Container>
  );
};
