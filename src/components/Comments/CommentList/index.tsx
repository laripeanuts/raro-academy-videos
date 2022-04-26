import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useFetch } from "../../../hooks/useFetch";
import { CommentType } from "../../../types/CommentType";
import { CommentItem } from "../CommentItem";
import { Container } from "./styles";
import apiClient from "../../../services/api-client";

export const CommentList = () => {
  const { isAuthenticated, logout } = useAuth();
  const { id } = useParams();
  const [comment, setComment] = useState<CommentType[]>([]);
  const { execute, loading, errorMessage } = useFetch(async () => {
    const { data } = await apiClient.get<CommentType[]>(
      `/videos/${id}/comentarios`,
    );

    setComment(data);
  });

  useEffect(() => {
    execute();
  }, []);

  return (
    <Container>
      <div className="scroll scroll2">
        <span className="response">
          {loading && (
            <div className="progress">
              <CircularProgress />
            </div>
          )}
          {!!errorMessage.length && errorMessage}
        </span>
        {comment && (
          <InfiniteScroll
            hasMore={false}
            loader={loading}
            next={() => {}}
            dataLength={comment.length}
          >
            <ul>
              {comment?.map((item: CommentType) => (
                <li key={item.id}>
                  <CommentItem
                    id={item.id}
                    texto={item.texto}
                    editado={item.editado}
                    createdAt={item.createdAt}
                    aluno={item.aluno}
                    upVotes={item.upVotes}
                    downVotes={item.downVotes}
                  />
                </li>
              ))}
            </ul>
          </InfiniteScroll>
        )}
      </div>
    </Container>
  );
};
