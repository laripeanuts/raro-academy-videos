import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { Row, Container } from "./styles";
import { useVideos } from "../../hooks/useVideos";
import { Carousel } from "../../components/Carousel";
import { removeFavorited } from "../../utils/removeFavorited";
import { Banner } from "../../components/Banner";
import { VideoList } from "../../components/VideoList";
import { Featured } from "../../components/Featured";

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
        <Featured
          sx={{
            flexDirection: "row",
            width: "100%",
            padding: "30px 15px",
          }}
        >
          <Carousel itemsWidth={260}>
            <VideoList list={favorites} />
          </Carousel>
        </Featured>
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
          <VideoList list={list} />
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
