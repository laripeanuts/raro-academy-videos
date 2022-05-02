import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import { VideoType } from "../../types/VideoType";
import { CommentsProvider } from "../../contexts/CommentsProvider";
import { useFetch } from "../../hooks/useFetch";
import apiClient from "../../services/api-client";
import { CommentForm } from "../../components/Comments/CommentsForm";
import { VideoPlayer } from "../../components/VideoPlayer";
import VideoDescription from "../../components/VideoDescription";
import ChipList from "../../components/ChipList";
import { Carousel } from "../../components/Carousel";
import { Thumbnail } from "../../components/Thumbnail";
import { FavoriteButton } from "../../components/FavoriteButton";
import { favorited } from "../../utils/removeFavorited";
import { useVideos } from "../../hooks/useVideos";

import {
  Container,
  ContainerLoading,
  ContainerComments,
  ContainerPlaylist,
  ContainerVideo,
} from "./styles";

export const VideoPage = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const { favorites } = useVideos("");
  const [video, setVideo] = useState<VideoType | null>(null);
  const [playlist, setPlaylist] = useState<VideoType[]>([]);

  const { execute, loading, errorMessage } = useFetch(async () => {
    try {
      const getPlaylist = apiClient.get<VideoType[]>(
        `/videos/${videoId}/recomendacoes`,
      );
      const getVideo = apiClient.get<VideoType>(`/videos/${videoId}`);
      const [playlistResponse, videoResponse] = await Promise.all([
        getPlaylist,
        getVideo,
      ]);

      if (!videoResponse.data) {
        navigate("/videos/not-found", { replace: true });
      } else {
        setPlaylist(playlistResponse.data);
        setVideo(videoResponse.data);
      }
    } catch (error) {
      navigate("/videos/not-found", { replace: true });
    }
  });

  /* prettier-ignore */
  const renderPlaylist = () => (
    playlist.length ? (
      <Carousel itemsWidth={260}>
        {playlist.map((item) => (
          <Thumbnail
            videoId={item.id}
            name={item.nome}
            tumbnail={item.thumbUrl}
            publishedAt={new Date(item.dataPublicacao).toLocaleDateString("pt-br")}
            key={item.id}
          >
            <FavoriteButton id={item.id} filled={favorited(item.id, favorites)} />
          </Thumbnail>
        ))}
      </Carousel>
    ) : null
  );

  /* prettier-ignore */
  const renderVideoData = () => {
    if (video) {
      return (
        <div className="videplayer">
          <VideoPlayer
            src={video.url}
            id={video.id}
            thumbnail={video.thumbUrl}
          />
          <VideoDescription
            videoId={video.id}
            title={video.nome}
            description={video.descricao}
            topic={video.topico}
            date={new Date(video.createdAt).toLocaleDateString()}
            duration={video.duracao}
          >
            <ChipList listTags={video.tags} />
          </VideoDescription>
        </div>
      );
    }

    if (errorMessage.length) {
      return <Typography variant="h5">{errorMessage}</Typography>;
    }

    return null;
  };

  const renderComments = () => <CommentForm />;

  useEffect(() => {
    execute();
  }, [videoId]);

  return (
    <CommentsProvider>
      <Container>
        {loading ? (
          <ContainerLoading>
            <CircularProgress
              aria-label="Carregando conteúdo"
              sx={{
                alignSelf: "center",
                justifySelf: "center",
              }}
            />
          </ContainerLoading>
        ) : (
          <>
            <ContainerVideo>{renderVideoData()}</ContainerVideo>
            <ContainerComments>{renderComments()}</ContainerComments>
            <ContainerPlaylist>{renderPlaylist()}</ContainerPlaylist>
          </>
        )}
      </Container>
    </CommentsProvider>
  );
};
