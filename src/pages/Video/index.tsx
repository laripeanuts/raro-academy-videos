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
import ChipList from "../../components/ChipList";
import { Carousel } from "../../components/Carousel";
import { Thumbnail } from "../../components/Thumbnail";
import { FavoriteButton } from "../../components/FavoriteButton";
import { favorited } from "../../utils/removeFavorited";
import { useVideos } from "../../hooks/useVideos";

export const VideoPage = () => {
  const { videoId } = useParams();
  const { favorites } = useVideos();
  const [video, setVideo] = useState({} as VideoType);
  const [playlist, setPlaylist] = useState<VideoType[]>([]);
  const { execute, loading, errorMessage } = useFetch(async () => {
    const getPlaylist = apiClient.get<VideoType[]>(
      `/videos/${videoId}/recomendacoes`,
    );
    const getVideo = apiClient.get<VideoType>(`/videos/${videoId}`);
    const [playlistResponse, videoResponse] = await Promise.all([
      getPlaylist,
      getVideo,
    ]);

    setPlaylist(playlistResponse.data);
    setVideo(videoResponse.data);
  });

  const loadingProgress = () => (
    <div className="progress">
      <CircularProgress />
    </div>
  );

  const loadVideoSection = () => (
    <div className="videplayer">
      <VideoPlayer src={video.url} id={video.id} thumbnail={video.thumbUrl} />
      <VideoDescription
        videoId={video.id}
        title={video.nome}
        description={video.descricao}
        date={new Date(video.createdAt).toLocaleDateString()}
        duration={video.duracao}
      >
        <ChipList listTags={video.tags} />
      </VideoDescription>
    </div>
  );

  /* prettier-ignore */
  const renderPlaylist = () => (
    playlist.length ? (
      <Carousel itemsWidth={260}>
        {playlist.map((item) => (
          <Thumbnail
            videoId={item.id}
            name={item.nome}
            tumbnail={item.thumbUrl}
            publishedAt={new Date(item.dataPublicacao).toLocaleDateString(
              "pt-br",
            )}
            key={item.id}
          >
            <FavoriteButton id={item.id} filled={favorited(item.id, favorites)} />
          </Thumbnail>
        ))}
      </Carousel>
    ) : null
  );

  useEffect(() => {
    execute();
  }, [videoId]);

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
        <ContainerPlaylist>{renderPlaylist()}</ContainerPlaylist>
      </Container>
    </CommentsProvider>
  );
};
