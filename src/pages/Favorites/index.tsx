import Typography from "@mui/material/Typography";
import { useVideos } from "../../hooks/useVideos";
import { Container, FavoritesList } from "./styles";
import { VideoList } from "../../components/VideoList";

export const FavoritesPage = () => {
  const { favorites, loading, errorMessage } = useVideos();

  const renderFavorites = () => (
    <FavoritesList>
      <VideoList list={favorites} />
    </FavoritesList>
  );

  const renderPageContent = () => {
    if (!favorites.length) {
      return (
        <Typography alignSelf="center" variant="h6">
          Sua lista de favoritos está vazia!
        </Typography>
      );
    }

    return (
      <>
        <Typography variant="h4">Favoritos</Typography>
        {renderFavorites()}
      </>
    );
  };

  return <Container>{renderPageContent()}</Container>;
};
