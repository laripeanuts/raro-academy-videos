import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { CommentType } from "../../../types/CommentType";
import { formatDate } from "../../../utils/formatDate";

import { Container } from "./styles";

export const CommentItem = ({
  id,
  texto,
  editado,
  createdAt,
  aluno,
  upVotes,
  downVotes,
}: CommentType) => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Container className="commentList">
      <div className="commentListAside" />
      <div>
        <div className="commentListHeader">
          <Typography variant="subtitle2">{aluno.nome}</Typography>
          <Typography variant="body2">{formatDate(createdAt)}</Typography>
        </div>
        <div className="commentListBody">
          <img src={aluno.foto} alt={aluno.nome} />
          <Typography variant="body1">{texto}</Typography>
        </div>
        <div className="commentListFooter">
          <div className="vote">
            <KeyboardArrowDownIcon />
            <Typography variant="body2">{upVotes}</Typography>
          </div>
          <div className="vote">
            <KeyboardArrowUpIcon />
            <Typography variant="body2">{downVotes}</Typography>
          </div>
        </div>
      </div>
    </Container>
  );
};
