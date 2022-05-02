import { memo, useCallback } from "react";
import { useVideos } from "../../hooks/useVideos";
import { VideoType } from "../../types/VideoType";
import { favorited } from "../../utils/removeFavorited";
import { FavoriteButton } from "../FavoriteButton";
import { Thumbnail } from "../Thumbnail";

type VideoListProps = {
  list: VideoType[];
};

export const VideoList = memo(({ list }: VideoListProps) => {
  const { favorites } = useVideos();

  return (
    <>
      {list.map((video) => (
        <Thumbnail
          videoId={video.id}
          name={video.nome}
          tumbnail={video.thumbUrl}
          publishedAt={new Date(video.createdAt).toLocaleDateString("pt-br")}
          key={video.id}
        >
          <FavoriteButton
            id={video.id}
            filled={favorited(video.id, favorites)}
          />
        </Thumbnail>
      ))}
    </>
  );
});
