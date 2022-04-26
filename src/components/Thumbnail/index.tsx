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
  id: string;
  tumbnail: string;
  name: string;
  publishedAt: string;
};

export const Thumbnail = memo(
  ({
    id,
    tumbnail,
    name,
    publishedAt,
    children,
  }: WithChildren<ThumbnailType>) => (
    <Link to={`/videos/${id}`}>
      <TumbnailContainer>
        <TumbnailImage src={tumbnail} alt={name} />
        <InfoTumblr>
          <TextTumblr>
            <Typography variant="body1" noWrap sx={{ fontWeight: "bold" }}>
              {name}
            </Typography>
            <Typography variant="body2">{publishedAt}</Typography>
          </TextTumblr>
          {children}
        </InfoTumblr>
      </TumbnailContainer>
    </Link>
  ),
);
