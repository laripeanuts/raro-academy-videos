import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { CircularProgress } from "@mui/material";

import { CommentsProvider } from "../../contexts/CommentsProvider";

import { useFetch } from "../../hooks/useFetch";
import apiClient from "../../services/api-client";

import { formatDate } from "../../utils/formatDate";
import { CommentForm } from "../../components/Comments/CommentsForm";
import { VideoPlayer } from "../../components/VideoPlayer";
import VideoDescription from "../../components/VideoDescription";

import { VideoType } from "../../types/VideoType";

import {
  Container,
  ContainerComments,
  ContainerPlaylist,
  ContainerVideo,
} from "./styles";

export const VideoPage = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState({} as VideoType);
  const { execute, loading, errorMessage } = useFetch(async () => {
    const { data } = await apiClient.get<VideoType>(`/videos/${videoId}`);
    setVideo(data);
  });

  const loadingProgress = () => (
    <div className="progress">
      <CircularProgress />
    </div>
  );

  const loadVideoSection = () => (
    <div className="videplayer">
      <VideoPlayer src={video.url} id={video.id} />
      <VideoDescription
        title={video.nome}
        description={video.descricao}
        date={formatDate(video.createdAt)}
        week={video.duracao}
      />
    </div>
  );

  useEffect(() => {
    execute();
  }, []);

  return (
    <CommentsProvider>
      <Container className="videoPage">
        <main className="main">
          <ContainerVideo>
            {loading ? loadingProgress() : loadVideoSection()}
          </ContainerVideo>
          <ContainerComments>
            <CommentForm />
          </ContainerComments>
        </main>
        <ContainerPlaylist>
          <h1>Playlist</h1>
        </ContainerPlaylist>
      </Container>
    </CommentsProvider>
  );
};
