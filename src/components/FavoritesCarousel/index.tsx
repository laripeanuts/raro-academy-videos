import { useVideos } from "../../hooks/useVideos";
import { FavoriteButton } from "../FavoriteButton";
import { Featured } from "../Featured";
import { Thumbnail } from "../Thumbnail";
import { Carousel } from "../Carousel";

/* prettier-ignore */
export const FavoritesCarousel = () => {
  const { favorites } = useVideos();

  return (
    <Featured
      sx={{
        flexDirection: "row",
        width: "100%",
        padding: "30px 15px",
      }}
    >
      <Carousel itemsWidth={260}>
        {favorites.map((video) => (
          <Thumbnail
            videoId={video.id}
            name={video.nome}
            tumbnail={video.thumbUrl}
            publishedAt={new Date(video.dataPublicacao).toLocaleDateString(
              "pt-br",
            )}
            key={video.id}
          >
            <FavoriteButton id={video.id} filled />
          </Thumbnail>
        ))}
      </Carousel>
    </Featured>
  );
};
