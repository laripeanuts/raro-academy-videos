import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChipList from "../../components/ChipList";
import { CommentForm } from "../../components/Comments/CommentsForm";
import VideoDescription from "../../components/VideoDescription";
import { VideoPlayer } from "../../components/VideoPlayer";
import { useFetch } from "../../hooks/useFetch";
import apiClient from "../../services/api-client";
import { VideoType } from "../../types/VideoType";
import { formatDate } from "../../utils/formatDate";
import {
  Container,
  ContainerComments,
  ContainerPlaylist,
  ContainerVideo,
} from "./styles";

export const VideoPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState({} as VideoType);
  const { execute, loading, errorMessage } = useFetch(async () => {
    const { data } = await apiClient.get<VideoType>(`/videos/${id}`);
    const response = { ...data };
    setVideo(response);
  });

  useEffect(() => {
    execute();
  }, []);

  return (
    <Container className="videoPage">
      <ContainerPlaylist>
        <h1>Playlist</h1>
      </ContainerPlaylist>
      <main className="main">
        <ContainerVideo>
          {loading ? (
            <div className="progress">
              <CircularProgress />
            </div>
          ) : (
            <>
              <VideoPlayer src={video.thumbUrl} alt={video.nome} />
              <VideoDescription
                title={video.nome}
                description={video.descricao}
                date={formatDate(video.dataPublicacao)}
                week={video.duracao}
                isFavorite={false}
              >
                <ChipList listTags={video.tags} />
              </VideoDescription>
            </>
          )}
        </ContainerVideo>
        <ContainerComments>
          <CommentForm />
        </ContainerComments>
      </main>
    </Container>
  );
};
