import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import {
  AllFavoritesLink,
  AllVideosTitle,
  Container,
  Greetings,
} from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { useFetch } from "../../hooks/useFetch";
import { useVideos } from "../../hooks/useVideos";
import apiClient from "../../services/api-client";
import { VideoType } from "../../types/VideoType";
import { FavoritesCarousel } from "../../components/FavoritesCarousel";

/* prettier-ignore */
export const FavoritesPage = () => {
  const {
    favorites, allVideos, setAllVideos, setFavorites,
  } = useVideos();
  const { isAuthenticated, user } = useAuth();
  const { execute, errorMessage, loading } = useFetch(async () => {
    if (isAuthenticated) {
      const [favoritesResponse] = await Promise.all([
        apiClient.get<VideoType[]>("/videos/favoritos"),
      ]);
      setFavorites(favoritesResponse.data);
    } else {
      const { data } = await apiClient.get<VideoType[]>("/videos");

      setAllVideos(data);
    }
  });

  const renderGreetings = () => (isAuthenticated ? (
    <Greetings variant="h4">{`Olá, ${user.nome}!`}</Greetings>
  ) : null);

  const renderFavorites = () => (
    isAuthenticated && favorites.length
      ? (
        <>
          <AllFavoritesLink to="/favoritos">
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

  const renderPageContent = () => {
    if (loading) {
      return <CircularProgress aria-label="Carregando conteúdo" size={60} />;
    }

    if (errorMessage.length) {
      <Typography variant="h5">{errorMessage}</Typography>;
    }

    return (
      <>
        <AllVideosTitle variant="h4">Favoritos</AllVideosTitle>
        {renderFavorites()}
      </>
    );
  };

  return (
    <Container display={loading || !!errorMessage.length ? "flex" : "grid"}>
      {renderPageContent()}
    </Container>
  );
};
