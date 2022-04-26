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
  const [comment, setComment] = useState<CommentType[]>([]);
  const { execute, loading, errorMessage } = useFetch(async () => {
    const { data } = await apiClient.get<CommentType[]>(
      "/videos/25526467-e9d7-40cb-bc60-76bb85419915/comentarios",
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
          {loading && <CircularProgress />}
          {!!errorMessage.length && errorMessage}
        </span>
        {comment && (
          <InfiniteScroll
            hasMore={false}
            loader={<CircularProgress />}
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
