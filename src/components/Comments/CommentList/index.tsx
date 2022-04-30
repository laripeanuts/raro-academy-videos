import { useEffect, useState, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import {
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { useComments } from "../../../hooks/useComments";

import { CommentType } from "../../../types/CommentType";
import { CommentItem } from "../CommentItem";

import { Container } from "./styles";
import Link from "../../Link";

export const CommentList = () => {
  const { comments, loading, errorMessage } = useComments();

  const [loadMessage, setLoadMessage] = useState<CommentType[]>([]);
  const [quantityMessage, setQuantityMessage] = useState(5);
  const [hasMore, setHasMore] = useState(true);

  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const loadMore = () => {
    setQuantityMessage(quantityMessage + 5);
    setLoadMessage(comments.slice(quantityMessage, quantityMessage));
    if (comments.length <= loadMessage.length) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [comments]);

  /* prettier-ignore */
  const loadCommentsList = () => (
    loading ? (
      <div>
        {loading && (
          <div className="progress">
            <CircularProgress />
            {!!errorMessage.length && errorMessage}
          </div>
        )}
      </div>
    ) : (
      <>
        {hasMore ? (
          <Tooltip title="Carregar mais mensagens" arrow>
            <IconButton
              onClick={() => loadMore()}
              className="load-more-button"
              disableRipple
            >
              <MapsUgcIcon />
            </IconButton>
          </Tooltip>
        ) : null}
        {/* <InfiniteScroll
          hasMore={hasMore}
          next={loadMore}
          loader={loading}
          dataLength={comments.length}
          useWindow={false}
          getScrollParent={() => this.scrollToBottom}
        > */}
        <ul>
          {loadMessage?.map((item: CommentType) => (
            <li key={item.id}>
              <CommentItem
                id={item.id}
                texto={item.texto}
                editado={item.editado}
                createdAt={item.createdAt}
                aluno={item.aluno}
                upVotes={item.upVotes}
                downVotes={item.downVotes}
                meuVote={item.meuVote}
              />
            </li>
          ))}
        </ul>
        <div ref={messagesEndRef} />
        {/* </InfiniteScroll> */}
      </>
    ));

  useEffect(() => {
    setLoadMessage([...comments].splice(-quantityMessage, quantityMessage));
  }, [comments, quantityMessage]);

  return (
    <Container>
      <div className="scroll scroll2">{loadCommentsList()}</div>
    </Container>
  );
};
