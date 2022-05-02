import { useEffect, useState } from "react";
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
import { VideoType } from "../../types/VideoType";
import { useFetch } from "../../hooks/useFetch";
import apiClient from "../../services/api-client";

/* prettier-ignore */
export const Home = () => {
  const { favorites, loading, errorMessage } = useVideos();
  const [lastVideos, setLastVideos] = useState<VideoType[]>([]);
  const [page, setPage] = useState(1);
  const { execute } = useFetch(async () => {
    const responseLastVideos = await apiClient.get<VideoType[]>(
      `/videos?pagina=${page}&itensPorPagina=10&orderBy=dataPublicacao&orderDirection=DES`,
    );
    setLastVideos(responseLastVideos.data);
  });

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
    const list = lastVideos;

    return list.length ? (
      <>
        <Row>
          <Typography variant="h4">Últimos vídeos</Typography>
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

  useEffect(() => {
    execute();
  }, []);

  return <Container>{renderPageContent()}</Container>;
};
