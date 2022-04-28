import Typography from "@mui/material/Typography";
import { useVideos } from "../../hooks/useVideos";
import { Thumbnail } from "../../components/Thumbnail";
import { FavoriteButton } from "../../components/FavoriteButton";
import { Container, FavoritesList } from "./styles";

export const FavoritesPage = () => {
  const { favorites } = useVideos();

  const renderFavorites = () => (
    <FavoritesList>
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
    </FavoritesList>
  );

  /* prettier-ignore */
  const renderPageContent = () => (
    favorites.length ? (
      <>
        <Typography variant="h4">Favoritos</Typography>
        {renderFavorites()}
      </>
    ) : (
      <Typography alignSelf="center" variant="h6">Sua lista de favoritos está vazia!</Typography>
    )
  );

  return <Container>{renderPageContent()}</Container>;
};
