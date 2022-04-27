import { IconButton } from "@mui/material";
import { ReactNode } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FeedIcon from "@mui/icons-material/Feed";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Container, StyledColumn, StyledRow } from "./styles";

export type VideoDescriptionProps = {
  children?: ReactNode;
  title: string;
  description: string;
  date: string;
  week: string;
  isFavorite: boolean;
  onClickFavorite?: () => void;
  onClickFeed?: () => void;
};

const VideoDescription = ({
  children,
  title,
  description,
  date,
  week,
  isFavorite,
  onClickFavorite,
  onClickFeed,
}: VideoDescriptionProps) => (
  <Container>
    <StyledColumn>
      <StyledRow alignContent="space-between">
        <h3>{title}</h3>
        <div>
          <IconButton
            color="primary"
            onClick={onClickFeed}
          >
            <FeedIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={((onClickFavorite))}
          >
            {isFavorite ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
          </IconButton>
        </div>
      </StyledRow>
      <div style={{ textAlign: "justify" }}>
        {description}
      </div>
      <StyledRow alignContent="flex-start">
        { children }
      </StyledRow>

      <StyledRow alignContent="flex-end">
        <div style={{ marginRight: 24 }}>
          {week}
        </div>
        <div>
          {date}
        </div>
      </StyledRow>
    </StyledColumn>
  </Container>
);

export default VideoDescription;
