import { useContext } from "react";
import { CommentsContext } from "../contexts/CommentsProvider";

export const useComments = () => {
  const context = useContext(CommentsContext);
  return context;
};
