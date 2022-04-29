import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress } from "@mui/material";
import { useComments } from "../../../hooks/useComments";

import { CommentType } from "../../../types/CommentType";
import { CommentItem } from "../CommentItem";

import { Container } from "./styles";

export const CommentList = () => {
  const { comments, loading, errorMessage } = useComments();

  const loadCommentsList = () => loading ? (
    <div>
      {loading && (
      <div className="progress">
        <CircularProgress />
        {!!errorMessage.length && errorMessage}
      </div>
      )}
    </div>
  ) : (
    <InfiniteScroll
      hasMore={false}
      loader={loading}
      next={() => {}}
      dataLength={comments.length}
    >
      <ul>
        {comments?.map((item: CommentType) => (
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
  );

  return (
    <Container>
      <div className="scroll scroll2">{loadCommentsList()}</div>
    </Container>
  );
};
