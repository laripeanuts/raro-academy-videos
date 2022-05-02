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

  const loadError = () => (
    <div className="playerLoading">{`Algo deu errado! ${error}`}</div>
  );

  return (
    <Container>
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        muted
        url={src}
        className="react-player"
        onError={(err) => setError(err)}
        key={id}
      />
      {error ? loadError() : null}
    </Container>
  );
};
