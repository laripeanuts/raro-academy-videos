import { Container } from "./style";

type VideoPlayerType = {
  src: string;
  alt: string;
};

export const VideoPlayer = ({ src, alt }: VideoPlayerType) => {
  const videoPlayer = "Fazer";
  return (
    <Container>
      <img src={src} alt={alt} />
    </Container>
  );
};
