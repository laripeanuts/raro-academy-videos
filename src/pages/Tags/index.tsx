import { CircularProgress, Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import apiClient from "../../services/api-client";
import { VideoType } from "../../types/VideoType";
import { AllVideosList, AllVideosTitle, Container } from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { useVideos } from "../../hooks/useVideos";
import { FavoriteButton } from "../../components/FavoriteButton";
import { Thumbnail } from "../../components/Thumbnail";

const Tags = () => {
  const { tagName } = useParams();
  const { allVideos, setAllVideos, setFavorites } = useVideos();
  const { execute, loading, errorMessage } = useFetch(async () => {
    const allVideosResponse = await apiClient.get<VideoType[]>(
      `/videos?tags=${tagName}`,
    );
    setAllVideos(allVideosResponse.data);
  });

  useEffect(() => {
    execute();
  }, []);

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
          <FavoriteButton id={video.id} />
        </Thumbnail>
      ))}
    </AllVideosList>
  );

  const renderPageContent = () => {
    if (loading) {
      return (
        <Container display="flex">
          <CircularProgress aria-label="Carregando conteúdo" size={60} />
        </Container>
      );
    }
    if (errorMessage.length) {
      return (
        <Container display="flex">
          <Typography variant="h5">{errorMessage}</Typography>
        </Container>
      );
    }
    if (allVideos.length === 0) {
      return (
        <Container display="flex">
          <Typography variant="h5">Vídeos não encontrados!</Typography>
        </Container>
      );
    }

    return (
      <Container display="grid">
        <AllVideosTitle variant="h4">{`Vídeos ${tagName}`}</AllVideosTitle>
        {renderAllVideos()}
      </Container>
    );
  };

  return <div>{renderPageContent()}</div>;
};

export default Tags;
