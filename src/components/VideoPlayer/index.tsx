import { CircularProgress } from "@mui/material";
import { useState } from "react";

import ReactPlayer from "react-player/lazy";

import { Container } from "./style";

type VideoPlayerType = {
  thumbnail?: string;
  src: string;
  id: string;
};

export const VideoPlayer = ({ thumbnail, src, id }: VideoPlayerType) => {
  const [error, setError] = useState("");

  const loadingVideo = () => (
    <div className="playerLoading">
      <CircularProgress />
    </div>
  );

  const loadError = () => (
    <div className="playerLoading">
      Algo deu errado ao carregar o vídeo. Tente novamente mais tarde.
    </div>
  );

  return (
    <Container>
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url={src}
        className="react-player"
        onError={loadError}
        key={id}
      />
    </Container>
  );
};
