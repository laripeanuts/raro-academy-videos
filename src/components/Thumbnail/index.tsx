import { memo } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import {
  InfoThumblr,
  TextThumblr,
  ThumbnailContainer,
  ThumbnailImage,
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
    <ThumbnailContainer>
      <Link to={`/videos/${videoId}`}>
        <ThumbnailImage src={tumbnail} alt={name} />
      </Link>
      <InfoThumblr>
        <TextThumblr>
          <Link to={`/videos/${videoId}`}>
            <Typography variant="body1" noWrap sx={{ fontWeight: "bold" }}>
              {name}
            </Typography>
            <Typography variant="body2">{publishedAt}</Typography>
          </Link>
        </TextThumblr>
        {children}
      </InfoThumblr>
    </ThumbnailContainer>
  ),
);
