import { CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import apiClient from "../../services/api-client";
import { VideoType } from "../../types/VideoType";
import { VideoListContainer, Container } from "./styles";
import { VideoList } from "../../components/VideoList";

const Tags = () => {
  const { tagName } = useParams();
  const [videos, setVideos] = useState<VideoType[]>([]);
  const { execute, errorMessage, loading } = useFetch(async () => {
    const allVideosResponse = await apiClient.get<VideoType[]>("/videos", {
      params: {
        tags: tagName,
      },
    });

    setVideos(allVideosResponse.data);
  });

  useEffect(() => {
    execute();
  }, []);

  const renderAllVideos = () => (
    <VideoListContainer>
      <VideoList list={videos} />
    </VideoListContainer>
  );

  const renderPageContent = () => {
    if (loading) {
      return (
        <Container>
          <CircularProgress
            sx={{ alignSelf: "center" }}
            aria-label="Carregando conteúdo"
            size={60}
          />
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
        <Typography variant="h4" sx={{ textTransform: "capitalize" }}>
          {tagName}
        </Typography>
        {renderAllVideos()}
      </>
    );
  };

  return <Container>{renderPageContent()}</Container>;
};

export default Tags;
