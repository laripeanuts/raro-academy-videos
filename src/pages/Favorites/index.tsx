import { VideoType } from "../../types/VideoType";
import { Container } from "./styles";

import { useFetch } from "../../hooks/useFetch";

export const FavoritesPage = () => {
  const { data, hasError, isLoading } = useFetch<VideoType[]>("/videos");

  return (
    <Container className="notfound">
      <h1>Videos Page</h1>
      {isLoading && <p>Loading...</p>}
      {hasError && <p>erro...</p>}
      <ul>
        {data?.map((video: VideoType) => (
          <li key={video.id}>
            <h2>{video.nome}</h2>
          </li>
        ))}
      </ul>
    </Container>
  );
};
