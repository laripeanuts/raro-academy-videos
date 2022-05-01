/* eslint-disable camelcase */
import { Events, Link, scroller } from "react-scroll";
import { useParams } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import apiClient from "../../services/api-client";

import { CommentType } from "../../types/CommentType";
import { ChildrenProviderType } from "../AuthProvider/types";
import { CommentsContextType } from "./types";

export const CommentsContext = createContext<CommentsContextType>({
  comments: [],
  loading: false,
  updateList: () => {},
  errorMessage: "",
  setComments: () => {},
});

export const CommentsProvider = ({ children }: ChildrenProviderType) => {
  const { videoId } = useParams();

  const [comments, setComments] = useState<CommentType[]>([]);

  const { execute, loading, errorMessage } = useFetch(async () => {
    const { data } = await apiClient.get<CommentType[]>(
      `/videos/${videoId}/comentarios`,
    );
    setComments(data);
  });

  const goDown = () => {
    scroller.scrollTo("listBegin", {
      duration: 1500,
      delay: 0,
      smooth: "easeInOutQuart",
      containerId: "comments-list",
    });
  };

  const updateList = () => {
    execute();
    goDown();
  };

  useEffect(() => {
    execute();
  }, [videoId]);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        goDown();
      }, 1000);
    }
  }, []);

  return (
    <CommentsContext.Provider
      value={{
        comments,
        setComments,
        loading,
        errorMessage,
        updateList,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
