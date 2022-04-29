import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WithChildren } from "../../common/childrenType";
import { useFetch } from "../../hooks/useFetch";
import apiClient from "../../services/api-client";
import { CommentType } from "../../types/CommentType";
import { VideoType } from "../../types/VideoType";
import ChipList from "../ChipList";
import {
  BannerConatiner,
  BannerImg,
  BannerInfoComtainer,
  BannerInfoText,
  BannerTitle,
} from "./style";

export const Banner = ({ children }: WithChildren) => {
  const [video, setVideo] = useState<VideoType>({} as VideoType);
  const [comments, setComments] = useState(0);
  const { execute, loading, errorMessage } = useFetch(async () => {
    const response = await apiClient.get<VideoType>(
      "/videos/25526467-e9d7-40cb-bc60-76bb85419915",
    );
    const comentsResponse = await apiClient.get<CommentType[]>(
      "/videos/25526467-e9d7-40cb-bc60-76bb85419915/comentarios",
    );
    setVideo(response.data);
    setComments(comentsResponse.data.length);
  });

  useEffect(() => {
    execute();
  }, []);

  return (
    <Link to={`/videos/${video.id}`}>
      <BannerConatiner>
        <BannerImg src={video.thumbUrl} />
        <BannerInfoComtainer>
          <BannerTitle variant="h2">{video.nome}</BannerTitle>
          <BannerInfoText>
            <Typography variant="body2" sx={{}}>
              {video.descricao}
            </Typography>
          </BannerInfoText>
          <Typography variant="body2">{`Quantidade de comentarios: ${comments}`}</Typography>
          <ChipList listTags={video.tags} />
        </BannerInfoComtainer>
      </BannerConatiner>
    </Link>
  );
};
