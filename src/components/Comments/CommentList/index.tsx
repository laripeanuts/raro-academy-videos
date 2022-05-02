import { Link } from "react-scroll";
import { useEffect, useState, useRef } from "react";

import { CircularProgress, IconButton, Tooltip } from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

import { useComments } from "../../../hooks/useComments";
import { CommentType } from "../../../types/CommentType";
import { CommentItem } from "../CommentItem";

import { Container } from "./styles";

export const CommentList = () => {
  const { comments, loading, errorMessage } = useComments();

  const [loadMessage, setLoadMessage] = useState<CommentType[]>([]);
  const [quantityMessage, setQuantityMessage] = useState(5);
  const [hasMore, setHasMore] = useState<boolean>();

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

  /* prettier-ignore */
  const loadCommentsList = () => (
    loading ? (
      <div>
        {loading ? (
          <div className="progress">
            <CircularProgress />
            {!!errorMessage.length && errorMessage}
          </div>
        ) : null}
      </div>
    ) : (
      <>
        <ul>
          <Link
            to="listBegin"
            smooth
            duration={1500}
            containerId="comments-list"
            className="go-down-button"
          >
            <IconButton disabled={comments.length < 4}>
              <Tooltip title="Vá para o começo" arrow>
                <ExpandCircleDownIcon />
              </Tooltip>
            </IconButton>
          </Link>
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
        <div id="listBegin" />
      </>
    ));

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
        }, 2000);
      });
      intersectionObserver.observe(listEndReference);

      return () => intersectionObserver.disconnect();
    }

    return () => {};
  }, [comments]);

  return (
    <Container>
      <div className="scroll scroll2" id="comments-list">
        {loadCommentsList()}
      </div>
    </Container>
  );
};
