import { useEffect, useState, Fragment } from "react";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { VideoListContainer, Container } from "./styles";
import { useVideos } from "../../hooks/useVideos";
import { removeRepeated } from "../../utils/removeRepeated";
import { InputSearch } from "../../components/InputSearch";
import apiClient from "../../services/api-client";
import { VideoType } from "../../types/VideoType";
import { useFetch } from "../../hooks/useFetch";
import { VideoList } from "../../components/VideoList";

/* prettier-ignore */
export const VideosPage = () => {
  const [querySearch, setQuerySearch] = useState<String>("");
  const {
    allVideos,
    loading,
    errorMessage,
  } = useVideos();
  const [topics, setTopics] = useState<string[]>([]);
  const [videos, setVideos] = useState<VideoType[]>(allVideos ?? []);

  const { execute } = useFetch(async () => {
    const videosResponse = await apiClient.get<VideoType[]>(
      `/videos?nome=${querySearch}`,
    );
    setVideos(videosResponse.data);
  });

  const renderListByTopic = (topic: string) => (
    <VideoListContainer>
      <VideoList list={videos.filter((video) => video.topico === topic)} />
    </VideoListContainer>
  );

  const renderVideos = () => topics.map((topic) => (
    <Fragment key={topic}>
      <Typography variant="h4" sx={{ textTransform: "capitalize" }}>
        {topic}
      </Typography>
      {renderListByTopic(topic)}
    </Fragment>
  ));

  const validaVideos = () => (
    videos.length ? (
      <>
        {renderVideos()}
      </>
    ) : (
      <Typography alignSelf="center" variant="h6">
        Vídeos não encontrados!
      </Typography>
    )
  );

  const renderPageContent = () => {
    if (loading) {
      return <CircularProgress sx={{ alignSelf: "center" }} aria-label="Carregando conteúdo" size={60} />;
    }

    if (errorMessage.length) {
      return <Typography variant="h5">{errorMessage}</Typography>;
    }

    return (
      <>
        <InputSearch onKeyPress={(value: String) => setQuerySearch(value)} />
        {validaVideos()}
      </>
    );
  };

  useEffect(() => {
    execute();
  }, [querySearch]);

  useEffect(() => {
    setTopics(removeRepeated(videos.map((video) => video.topico)).sort());
  }, [allVideos, videos]);

  return <Container>{renderPageContent()}</Container>;
};
