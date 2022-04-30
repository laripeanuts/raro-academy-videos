import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { Row, Container } from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { useVideos } from "../../hooks/useVideos";
import { FavoriteButton } from "../../components/FavoriteButton";
import { Thumbnail } from "../../components/Thumbnail";
import { Carousel } from "../../components/Carousel";
import { FavoritesCarousel } from "../../components/FavoritesCarousel";
import { removeFavorited } from "../../utils/removeFavorited";
import { Banner } from "../../components/Banner";

/* prettier-ignore */
export const Home = () => {
  const {
    favorites,
    allVideos,
    loading,
    errorMessage,
  } = useVideos();

  const renderFavorites = () => (
    favorites.length ? (
      <>
        <Row>
          <Typography variant="h4">Favoritos</Typography>
          <Link to="/videos/favoritos">
            <Typography variant="body2" className="link-carousel">Todos os favoritos</Typography>
          </Link>
        </Row>
        <FavoritesCarousel />
      </>
    ) : null
  );

  const renderBanner = () => <Banner />;

  const renderVideos = () => {
    const list = removeFavorited(allVideos, favorites);

    return list.length ? (
      <>
        <Row>
          <Typography variant="h4">Vídeos</Typography>
          <Link to="/videos">
            <Typography variant="body2" className="link-carousel">Todos os vídeos</Typography>
          </Link>
        </Row>
        <Carousel itemsWidth={260}>
          {list.map((video) => (
            <Thumbnail
              videoId={video.id}
              name={video.nome}
              tumbnail={video.thumbUrl}
              publishedAt={new Date(video.dataPublicacao).toLocaleDateString(
                "pt-br",
              )}
              key={video.id}
            >
              <FavoriteButton id={video.id} />
            </Thumbnail>
          ))}
        </Carousel>
      </>
    ) : null;
  };

  const renderPageContent = () => {
    if (loading) {
      return <CircularProgress aria-label="Carregando conteúdo" size={60} />;
    }

    if (errorMessage.length) {
      <Typography variant="h5">{errorMessage}</Typography>;
    }

    return (
      <>
        {renderBanner()}
        {renderFavorites()}
        {renderVideos()}
      </>
    );
  };

  return <Container>{renderPageContent()}</Container>;
};
