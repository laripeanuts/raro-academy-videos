import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { Row, Container } from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { useFetch } from "../../hooks/useFetch";
import { useVideos } from "../../hooks/useVideos";
import { FavoriteButton } from "../../components/FavoriteButton";
import { Thumbnail } from "../../components/Thumbnail";
import apiClient from "../../services/api-client";
import { VideoType } from "../../types/VideoType";
import { Carousel } from "../../components/Carousel";
import { FavoritesCarousel } from "../../components/FavoritesCarousel";
import { removeFavorited } from "../../utils/removeFavorited";
import { Banner } from "../../components/Banner";

/* prettier-ignore */
export const Home = () => {
  const {
    favorites,
    allVideos,
    setAllVideos,
    setFavorites,
  } = useVideos();
  const { isAuthenticated } = useAuth();
  const { execute, errorMessage, loading } = useFetch(async () => {
    if (isAuthenticated) {
      const [favoritesResponse, allVideosResponse] = await Promise.all([
        apiClient.get<VideoType[]>("/videos/favoritos"),
        apiClient.get<VideoType[]>("/videos"),
      ]);

      setFavorites(favoritesResponse.data);
      setAllVideos(allVideosResponse.data);
    } else {
      const { data } = await apiClient.get<VideoType[]>("/videos");

      setAllVideos(data);
      setFavorites([]);
    }
  });

  const renderFavorites = () => (
    favorites.length ? (
      <>
        <Row>
          <Typography variant="h4">Favoritos</Typography>
          <Link to="/videos/favoritos">
            <Typography variant="body2">Todos os favoritos</Typography>
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
            <Typography variant="body2">Todos os vídeos</Typography>
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

  useEffect(() => {
    execute();
  }, [isAuthenticated]);

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
