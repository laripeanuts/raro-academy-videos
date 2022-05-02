import { CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import apiClient from "../../services/api-client";
import { VideoType } from "../../types/VideoType";
import { AllVideosList, AllVideosTitle, Container } from "./styles";
import { useVideos } from "../../hooks/useVideos";
import { FavoriteButton } from "../../components/FavoriteButton";
import { Thumbnail } from "../../components/Thumbnail";
import { InputSearch } from "../../components/InputSearch";

const Tags = () => {
  const { tagName } = useParams();
  const [querySearch, setQuerySearch] = useState<String>("");
  const { allVideos, loading } = useVideos();
  const [videos, setVideos] = useState<VideoType[]>(allVideos ?? []);
  const { execute, errorMessage } = useFetch(async () => {
    const allVideosResponse = await apiClient.get<VideoType[]>(
      querySearch !== ""
        ? `/videos?nome=${querySearch}&tags=${tagName}`
        : `/videos?tags=${tagName}`,
    );
    setVideos(allVideosResponse.data);
  });

  useEffect(() => {
    execute();
  }, [querySearch]);

  const renderAllVideos = () => (
    <AllVideosList>
      {videos.map((video) => (
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

  /* prettier-ignore */
  const validaVideos = () => (
    videos.length ? (
      <>
        <Typography variant="h4">{`Vídeos ${tagName}`}</Typography>
        {renderAllVideos()}
      </>
    ) : (
      <Typography alignSelf="center" variant="h6">
        Vídeos não encontrados!
      </Typography>
    )
  );

  const renderPageContent = () => {
    if (loading) {
      return (
        <Container>
          <CircularProgress aria-label="Carregando conteúdo" size={60} />
        </Container>
      );
    }
    if (errorMessage.length) {
      return (
        <Container>
          <Typography variant="h5">{errorMessage}</Typography>
        </Container>
      );
    }
    return (
      <>
        <InputSearch onKeyPress={(value: String) => setQuerySearch(value)} />
        {validaVideos()}
      </>
    );
  };

  return <Container>{renderPageContent()}</Container>;
};

export default Tags;
