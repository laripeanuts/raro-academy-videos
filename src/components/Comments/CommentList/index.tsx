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
  const [hasMore, setHasMore] = useState<boolean>();

  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const loadMore = () => {
    if (comments.length > quantityMessage) {
      setHasMore(true);
      setQuantityMessage(quantityMessage + 5);
    } else {
      setHasMore(false);
    }
  };

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
      </>
    ));

  useEffect(() => {
    console.log("quantidade de mensagens", comments.length);
    console.log("quantidade de quant mensagens", quantityMessage);
    console.log(hasMore, "hasMore");
    setLoadMessage([...comments].splice(-quantityMessage, quantityMessage));
  }, [comments, quantityMessage]);

  useEffect(() => {
    if (comments.length > quantityMessage) setHasMore(true);
  }, [comments]);

  useEffect(() => {
    scrollToBottom();
  }, [comments]);

  return (
    <Container>
      <div className="scroll scroll2">{loadCommentsList()}</div>
    </Container>
  );
};
