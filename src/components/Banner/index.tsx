import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
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
  BannerTitle,
  BannerImgLink,
  BannerComentsCircle,
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
    <BannerConatiner>
      <BannerImgLink to={`/videos/${video.id}`}>
        <BannerImg src={video.thumbUrl} />
      </BannerImgLink>
      <BannerInfoComtainer>
        <BannerTitle variant="h3">{video.descricao}</BannerTitle>
        <Typography variant="body2">Quantidade de interações</Typography>
        <BannerComentsCircle>
          <Typography variant="body2">
            {comments}
          </Typography>
        </BannerComentsCircle>
        <ChipList listTags={video.tags} />
      </BannerInfoComtainer>
    </BannerConatiner>
  );
};
