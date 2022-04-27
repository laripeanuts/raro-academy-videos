import { useEffect, useRef, useState } from "react";
import { useVideos } from "../../hooks/useVideos";
import { CarrouselButton } from "../CarrouselButton";
import { FavoriteIcon } from "../FavoriteIcon";
import { Featured } from "../Featured";
import { Thumbnail } from "../Thumbnail";
import { Carousel } from "./styles";

/* prettier-ignore */
export const FavoritesCarousel = () => {
  const { favorites } = useVideos();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [distFromLeft, setDistFromLeft] = useState(0);

  const handleScroll = () => {
    if (carouselRef.current) {
      const distanceFromLeft = carouselRef.current.scrollLeft;

      setDistFromLeft(distanceFromLeft);
    }
  };

  const getHandleScrollClick = (offset: number) => () => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: distFromLeft + offset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      handleScroll();
      carousel.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <Featured
      sx={{
        gridArea: "featured",
        flexDirection: "row",
        gap: "10px",
        padding: "30px 15px",
      }}
    >
      <CarrouselButton
        left
        aria-label="Item anterior"
        onClick={getHandleScrollClick(-260)}
      />
      <Carousel ref={carouselRef}>
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
            <FavoriteIcon title="Desfavoritar" filled />
          </Thumbnail>
        ))}
      </Carousel>
      <CarrouselButton
        aria-label="Próximo item"
        onClick={getHandleScrollClick(260)}
      />
    </Featured>
  );
};
