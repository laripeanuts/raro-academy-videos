import { CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { WithChildren } from "../../common/childrenType";
import { useFetch } from "../../hooks/useFetch";
import { useVideos } from "../../hooks/useVideos";
import apiClient from "../../services/api-client";
import { CommentType } from "../../types/CommentType";
import { VideoType } from "../../types/VideoType";
import { getRandomIndex } from "../../utils/getRandomIndex";
import ChipList from "../ChipList";
import {
  BannerContainer,
  BannerImg,
  BannerInfoContainer,
  BannerTitle,
  BannerImgLink,
} from "./style";

export const Banner = ({ children }: WithChildren) => {
  const [video, setVideo] = useState<VideoType | null>(null);
  const [comments, setComments] = useState<number | null>(null);
  const { allVideos, loading: loadingVideos } = useVideos();
  const { execute, loading, errorMessage } = useFetch(async () => {
    if (video) {
      const comentsResponse = await apiClient.get<CommentType[]>(
        `/videos/${video.id}/comentarios`,
      );
      setComments(comentsResponse.data.length);
    }
  });

  useEffect(() => {
    if (allVideos.length) {
      const randomVideo = allVideos.at(
        getRandomIndex(allVideos.length),
      ) as VideoType;

      setVideo({
        ...randomVideo,
        createdAt: new Date(randomVideo.createdAt),
        tags: [...randomVideo.tags],
      });
    }
  }, []);

  useEffect(() => {
    execute();
  }, [video]);

  const renderContent = () => {
    if (loading && !loadingVideos) {
      return (
        <CircularProgress
          sx={{ alignSelf: "center" }}
          className="progress"
          aria-label="Carregando conteúdo"
        />
      );
    }

    if (errorMessage.length || !video || comments === null) {
      return null;
    }

    return (
      <BannerContainer>
        <BannerImgLink to={`/videos/${video?.id}`}>
          <BannerImg src={video.thumbUrl} />
        </BannerImgLink>
        <BannerInfoContainer>
          <BannerTitle variant="h4">{video.descricao}</BannerTitle>
          <Typography variant="subtitle2">
            {` Interações: ${comments}`}
          </Typography>
          <ChipList listTags={video.tags} />
        </BannerInfoContainer>
      </BannerContainer>
    );
  };

  return <>{renderContent()}</>;
};
