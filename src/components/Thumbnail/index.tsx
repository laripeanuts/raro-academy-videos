import { memo } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import {
  InfoTumblr,
  TextTumblr,
  TumbnailContainer,
  TumbnailImage,
} from "./styles";
import { WithChildren } from "../../common/childrenType";

type ThumbnailType = {
  videoId: string;
  tumbnail: string;
  name: string;
  publishedAt: string;
};

export const Thumbnail = memo(
  ({
    videoId,
    tumbnail,
    name,
    publishedAt,
    children,
  }: WithChildren<ThumbnailType>) => (
    <TumbnailContainer>
      <Link to={`/videos/${videoId}`}>
        <TumbnailImage src={tumbnail} alt={name} />
      </Link>
      <InfoTumblr>
        <TextTumblr>
          <Link to={`/videos/${videoId}`}>
            <Typography variant="body1" noWrap sx={{ fontWeight: "bold" }}>
              {name}
            </Typography>
            <Typography variant="body2">{publishedAt}</Typography>
          </Link>
        </TextTumblr>
        {children}
      </InfoTumblr>
    </TumbnailContainer>
  ),
);
