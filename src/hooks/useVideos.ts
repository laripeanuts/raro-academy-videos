import { useContext } from "react";
import { VideosContext } from "../contexts/VideosProvider";

export const useVideos = () => {
  const context = useContext(VideosContext);

  return context;
};
