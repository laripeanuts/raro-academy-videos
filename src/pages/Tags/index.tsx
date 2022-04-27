import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import apiClient from "../../services/api-client";
import { VideoType } from "../../types/VideoType";
import { Container } from "./styles";

const Tags = () => {
  const { tagName } = useParams();
  const { execute, loading, errorMessage } = useFetch(async () => {
    const { data } = await apiClient.get<VideoType>(`/videos?tags=${tagName}`);
    const response = { ...data };
    console.log(response);
    // setVideo(response);
  });

  useEffect(() => {
    execute();
  }, []);

  // const renderAllVideos = () => (
  //   <AllVideosList>
  //     {allVideos.map((video) => (
  //       <Thumbnail
  //         id={video.id}
  //         name={video.nome}
  //         tumbnail={video.thumbUrl}
  //         publishedAt={new Date(video.dataPublicacao).toLocaleDateString(
  //           "pt-br",
  //         )}
  //         key={video.id}
  //       >
  //         <FavoriteIcon title="Favoritar" />
  //       </Thumbnail>
  //     ))}
  //   </AllVideosList>
  // );

  // const renderPageContent = () => {
  //   if (loading) {
  //     return <CircularProgress aria-label="Carregando conteúdo" size={60} />;
  //   }

  //   if (errorMessage.length) {
  //     <Typography variant="h5">{errorMessage}</Typography>;
  //   }

  //   return (
  //     <>
  //       <AllVideosTitle variant="h4">Todos os vídeos</AllVideosTitle>
  //       {renderAllVideos()}
  //     </>
  //   );
  // };

  // return (
  //   <Container display={loading || !!errorMessage.length ? "flex" : "grid"}>
  //     {renderPageContent()}
  //   </Container>
  // );


  return (
    <Container>
      {loading ? (
        <div className="progress">
          <CircularProgress />
        </div>
      ) : (
        <h2>Tag</h2>
      )}
    </Container>
  );
};

export default Tags;
