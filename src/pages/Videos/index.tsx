import { useEffect, useState, Fragment } from "react";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { VideosList, Container } from "./styles";
import { useVideos } from "../../hooks/useVideos";
import { FavoriteButton } from "../../components/FavoriteButton";
import { Thumbnail } from "../../components/Thumbnail";
import { removeRepeated } from "../../utils/removeRepeated";
import { favorited } from "../../utils/removeFavorited";
import { InputSearch } from "../../components/InputSearch";
import apiClient from "../../services/api-client";
import { VideoType } from "../../types/VideoType";
import { useFetch } from "../../hooks/useFetch";

/* prettier-ignore */
export const VideosPage = () => {
  const {
    allVideos,
    favorites,
    loading,
    errorMessage,
    setAllVideos,
  } = useVideos();
  const [topics, setTopics] = useState<string[]>([]);
  const [querySearch, setQuerySearch] = useState<String>("");

  const { execute } = useFetch(async () => {
    const videosResponse = await apiClient.get<VideoType[]>(
      `/videos?nome=${querySearch}`,
    );
    setAllVideos(videosResponse.data);
  });

  // useEffect(() => {
  //   execute();
  // }, [querySearch]);

  const renderListByTopic = (topic: string) => (
    <VideosList>
      {allVideos
        .filter((video) => video.topico === topic)
        .map((video) => (
          <Thumbnail
            videoId={video.id}
            name={video.nome}
            tumbnail={video.thumbUrl}
            publishedAt={new Date(video.dataPublicacao).toLocaleDateString(
              "pt-br",
            )}
            key={video.id}
          >
            <FavoriteButton
              id={video.id}
              filled={favorited(video.id, favorites)}
            />
          </Thumbnail>
        ))}
    </VideosList>
  );

  const renderVideos = () => topics.map((topic) => (
    <Fragment key={topic}>
      <Typography variant="h4" sx={{ textTransform: "capitalize" }}>
        {topic}
      </Typography>
      {renderListByTopic(topic)}
    </Fragment>
  ));

  const renderPageContent = () => {
    if (loading) {
      return <CircularProgress sx={{ alignSelf: "center" }} aria-label="Carregando conteúdo" size={60} />;
    }

    if (errorMessage.length) {
      <Typography variant="h5">{errorMessage}</Typography>;
    }

    return (
      <>
        <InputSearch onKeyPress={(value: String) => setQuerySearch(value)} />
        {renderVideos()}
      </>
    );
  };

  useEffect(() => {
    setTopics(removeRepeated(allVideos.map((video) => video.topico)).sort());
  }, [allVideos]);

  return <Container>{renderPageContent()}</Container>;
};
