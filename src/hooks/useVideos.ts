import { useContext } from "react";
import { VideosContext } from "../contexts/VideosProvider";

export const useVideos = (name: String = "") => {
  const context = useContext(VideosContext);

  return context;
};
