import { useEffect, useState, useRef } from "react";

import { CircularProgress } from "@mui/material";
import { useComments } from "../../../hooks/useComments";

import { CommentType } from "../../../types/CommentType";
import { CommentItem } from "../CommentItem";

import { Container } from "./styles";

export const CommentList = () => {
  const { comments, loading, errorMessage } = useComments();

  const [loadMessage, setLoadMessage] = useState<CommentType[]>([]);
  const [quantityMessage, setQuantityMessage] = useState(5);
  const [hasMore, setHasMore] = useState<boolean>();

  const [isReverse, setIsReverse] = useState<boolean>(true);

  const listEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    listEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const loadMore = () => {
    if (comments.length > quantityMessage) {
      setHasMore(true);
      setQuantityMessage(
        (quantityMessageCurrent) => quantityMessageCurrent + 5,
      );
    } else {
      setHasMore(false);
    }
  };

  const loadLoading = () => {
    if (loading) {
      return <CircularProgress aria-label="Carregando conteúdo" />;
    }

    return null;
  };

  /* prettier-ignore */
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
    <>
      <ul>
        <li id="listEnd" />
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
      <div ref={listEndRef} />
    </>
  );

  useEffect(() => {
    scrollToBottom();
  }, [comments]);

  useEffect(() => {
    setLoadMessage([...comments].splice(-quantityMessage, quantityMessage));
  }, [comments, quantityMessage]);

  useEffect(() => {
    if (comments.length > quantityMessage) setHasMore(true);
  }, [comments]);

  useEffect(() => {
    const listEndReference: Element = document.querySelector(
      "#listEnd",
    ) as HTMLElement;

    if (listEndReference) {
      const intersectionObserver = new IntersectionObserver((entries) => {
        setTimeout(() => {
          if (entries.some((entry) => entry.isIntersecting)) {
            loadMore();
          }
        }, 1000);
      });
      intersectionObserver.observe(listEndReference);

      return () => intersectionObserver.disconnect();
    }

    return () => {};
  }, [comments]);

  return (
    <Container>
      <div className="scroll scroll2">{loadCommentsList()}</div>
    </Container>
  );
};
