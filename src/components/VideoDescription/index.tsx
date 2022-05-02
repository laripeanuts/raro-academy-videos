import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FeedIcon from "@mui/icons-material/Feed";
import Typography from "@mui/material/Typography";
import { FavoriteButton } from "../FavoriteButton";
import { WithChildren } from "../../common/childrenType";
import { favorited } from "../../utils/removeFavorited";
import { useVideos } from "../../hooks/useVideos";
import { Container, Row, Column } from "./styles";
import Link from "../Link";

export type VideoDescriptionProps = {
  videoId: string;
  title: string;
  description: string;
  date: string;
  topic: string;
  duration: string;
  onClickFeed?: () => void;
};

const VideoDescription = ({
  videoId,
  title,
  description,
  date,
  topic,
  duration,
  onClickFeed,
  children,
}: WithChildren<VideoDescriptionProps>) => {
  const { favorites } = useVideos();

  return (
    <Container>
      <Column>
        <Row justifyContent="space-between">
          <Typography variant="h5">{title}</Typography>
          <Row>
            <IconButton color="primary" onClick={onClickFeed}>
              <Tooltip title="Baixe os arquivos da aula" arrow>
                <FeedIcon />
              </Tooltip>
            </IconButton>
            <FavoriteButton
              id={videoId}
              filled={favorited(videoId, favorites)}
            />
          </Row>
        </Row>
        <Typography variant="subtitle1" fontSize={16}>
          {description}
        </Typography>
        <Row>{children}</Row>

        <Row justifyContent="flex-end">
          <Typography
            variant="subtitle1"
            fontSize={16}
            sx={{
              textTransform: "capitalize",
            }}
          >
            {topic}
          </Typography>
          <Typography variant="subtitle1" fontSize={16}>
            {duration}
          </Typography>
          <Typography variant="subtitle1" fontSize={16}>
            {new Date(date).toLocaleDateString("pt-br")}
          </Typography>
        </Row>
      </Column>
    </Container>
  );
};

export default VideoDescription;
