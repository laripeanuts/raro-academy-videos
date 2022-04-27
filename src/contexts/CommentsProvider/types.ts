import { Dispatch, SetStateAction } from "react";
import { CommentType } from "../../types/CommentType";

export type CommentsContextType = {
  comments: CommentType[];
  setComments: Dispatch<SetStateAction<CommentType[]>>;
  updateList: () => void;
  loading: boolean;
  errorMessage: string;
};
