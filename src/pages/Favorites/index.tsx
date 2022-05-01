import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { useVideos } from "../../hooks/useVideos";
import { Thumbnail } from "../../components/Thumbnail";
import { FavoriteButton } from "../../components/FavoriteButton";
import { Container, FavoritesList } from "./styles";
import { InputSearch } from "../../components/InputSearch";
import { useFetch } from "../../hooks/useFetch";
import apiClient from "../../services/api-client";
import { VideoType } from "../../types/VideoType";

export const FavoritesPage = () => {
  const { favorites, loading, errorMessage } = useVideos();
  const [querySearch, setQuerySearch] = useState<String>("");
  const [videos, setVideos] = useState<VideoType[]>(favorites ?? []);
  const { execute } = useFetch(async () => {
    const videosResponse = await apiClient.get<VideoType[]>(
      `/videos/favoritos?nome=${querySearch}`,
    );
    setVideos(videosResponse.data);
  });

  useEffect(() => {
    execute();
  }, [querySearch]);

  useEffect(() => {
    setVideos(favorites);
  }, [favorites]);

  const renderFavorites = () => (
    <FavoritesList>
      {videos.map((video) => (
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
    </FavoritesList>
  );

  /* prettier-ignore */
  const renderVideos = () => (
    favorites.length ? (
      <>
        <Typography variant="h4">Favoritos</Typography>
        {renderFavorites()}
      </>
    ) : (
      <Typography alignSelf="center" variant="h6">Sua lista de favoritos está vazia!</Typography>
    )
  );

  const renderPageContent = () => {
    if (loading) {
      return (
        <CircularProgress
          sx={{ alignSelf: "center" }}
          aria-label="Carregando conteúdo"
          size={60}
        />
      );
    }

    if (errorMessage.length) {
      <Typography variant="h5">{errorMessage}</Typography>;
    }

    return (
      <>
        <InputSearch onKeyPress={(value: String) => setQuerySearch(value)} />
        {renderVideos()}
      </>
    );
  };

  return <Container>{renderPageContent()}</Container>;
};
