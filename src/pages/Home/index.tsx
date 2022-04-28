import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import {
  AllFavoritesLink,
  AllVideosList,
  AllVideosTitle,
  Container,
  Greetings,
} from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { useFetch } from "../../hooks/useFetch";
import { useVideos } from "../../hooks/useVideos";
import { FavoriteButton } from "../../components/FavoriteButton";
import { Thumbnail } from "../../components/Thumbnail";
import apiClient from "../../services/api-client";
import { VideoType } from "../../types/VideoType";
import { FavoritesCarousel } from "../../components/FavoritesCarousel";
import { removeFavorited } from "../../utils/removeFavorited";

/* prettier-ignore */
export const Home = () => {
  const {
    favorites, allVideos, setAllVideos, setFavorites,
  } = useVideos();
  const { isAuthenticated, user } = useAuth();
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
    }
  });

  const renderGreetings = () => (isAuthenticated ? (
    <Greetings variant="h6">{`Olá, ${user.nome}! Aqui estão seus favoritos:`}</Greetings>
  ) : null);

  const renderFavorites = () => (
    isAuthenticated && favorites.length
      ? (
        <>
          <AllFavoritesLink to="videos/favoritos">
            <Typography variant="body2">Todos os favoritos</Typography>
          </AllFavoritesLink>
          <FavoritesCarousel />
        </>
      )
      : null
  );

  useEffect(() => {
    execute();
  }, [isAuthenticated]);

  const renderAllVideos = () => (
    <AllVideosList>
      {removeFavorited(allVideos, favorites).map((video) => (
        <Thumbnail
          videoId={video.id}
          name={video.nome}
          tumbnail={video.thumbUrl}
          publishedAt={new Date(video.dataPublicacao).toLocaleDateString(
            "pt-br",
          )}
          key={video.id}
        >
          <FavoriteButton id={video.id} title="Favoritar" />
        </Thumbnail>
      ))}
    </AllVideosList>
  );

  const renderPageContent = () => {
    if (loading) {
      return <CircularProgress aria-label="Carregando conteúdo" size={60} />;
    }

    if (errorMessage.length) {
      <Typography variant="h5">{errorMessage}</Typography>;
    }

    return (
      <>
        {renderGreetings()}
        {renderFavorites()}
        <AllVideosTitle variant="h4">Todos os vídeos</AllVideosTitle>
        {renderAllVideos()}
      </>
    );
  };

  return (
    <Container display={loading || !!errorMessage.length ? "flex" : "grid"}>
      {renderPageContent()}
    </Container>
  );
};
