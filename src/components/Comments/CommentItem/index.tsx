import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { useParams } from "react-router-dom";
import { useState } from "react";

import { IconButton, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";

import apiClient from "../../../services/api-client";
import { useComments } from "../../../hooks/useComments";
import { useAuth } from "../../../hooks/useAuth";

import { CommentType } from "../../../types/CommentType";
import { formatDate } from "../../../utils/formatDate";
import { FormInput } from "../../FormInput";
import { Container } from "./styles";

type CommentsFormType = {
  texto: string;
};

const CommentsFormSchema = yup
  .object({
    texto: yup.string().required("Digite um comentário"),
  })
  .required();

export const CommentItem = ({
  id,
  texto,
  editado,
  createdAt,
  aluno,
  upVotes,
  downVotes,
}: CommentType) => {
  const { videoId } = useParams();

  const { user, isAuthenticated } = useAuth();
  const { updateList } = useComments();

  const [editavel, setEditavel] = useState(false);
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const isMyComment = user.id === aluno.id;

  // Formulário Edição
  const {
    handleSubmit,
    control,
    resetField,
    formState: { errors },
  } = useForm<CommentsFormType>({
    resolver: yupResolver(CommentsFormSchema),
  });

  const handleDelete = async (commentId: string) => {
    const url = `/videos/${videoId}/comentarios/${commentId}`;
    try {
      await apiClient?.delete(url);
      setMessage("");
      updateList();
    } catch (err: any) {
      if (err.statusCode === 404) {
        setMessage("Comentário não enviado");
      } else {
        setMessage("Algo deu errado. Tente novamente mais tarde");
      }
    }
  };

  const renderMyActions = () => {
    if (isMyComment) {
      return (
        <div className="commentListActions">
          <EditIcon
            fontSize="small"
            className="edit"
            onClick={() => setEditavel(true)}
          />
          <ClearIcon
            fontSize="small"
            className="delete"
            onClick={() => {
              handleDelete(id);
            }}
          />
        </div>
      );
    }

    return null;
  };

  const handleEdit: SubmitHandler<CommentsFormType> = async (data) => {
    try {
      setLoading(true);
      const url = `/videos/${videoId}/comentarios/${id}`;
      await apiClient.patch(url, data);
      console.log(data);
      setError("");
      updateList();
    } catch (err: any) {
      if (err.statusCode === 404) {
        setError("Comentário não enviado");
      } else {
        setError("Algo deu errado. Tente novamente mais tarde");
      }
    }
    resetField("texto");
    setLoading(false);
    setEditavel(false);
  };

  const renderMyEdit = () => {
    if (isAuthenticated && isMyComment && editavel) {
      return (
        <form onSubmit={handleSubmit(handleEdit)}>
          <div className="makeComment">
            <FormInput
              type="text"
              name="texto"
              placeholder="Altere seu comentário"
              control={control}
              size="small"
              aria-invalid={errors.texto ? "true" : "false"}
            />
            <LoadingButton
              className="button"
              type="submit"
              endIcon={<SendIcon />}
              loading={loading}
              loadingPosition="end"
              variant="contained"
              size="small"
              sx={{
                width: "30px",
                height: "40px",
                input: {
                  maxHeight: "30px",
                  fontSize: "14px",
                },
              }}
            />
          </div>
        </form>
      );
    }
    return <Typography variant="subtitle1">{texto}</Typography>;
  };

  return (
    <Container className="commentList">
      <div className="commentListAside" />
      {message && message}
      <div>
        <div className="commentListHeader">
          <Typography variant="subtitle2">{aluno.nome}</Typography>
          <Typography variant="subtitle1">{formatDate(createdAt)}</Typography>
        </div>
        <div className="commentListBody">
          <img src={aluno.foto} alt={aluno.nome} />
          <div className="containerText">
            {renderMyEdit()}
            {editado && (
              <Typography
                variant="subtitle1"
                fontWeight="500"
                className="edited"
              >
                Editado
              </Typography>
            )}
          </div>
          {renderMyActions()}
        </div>
        <div className="commentListFooter">
          <div className="vote">
            <IconButton color="secondary" aria-label="downVote">
              <KeyboardArrowDownIcon />
            </IconButton>
            <Typography variant="subtitle1">{upVotes}</Typography>
          </div>
          <div className="vote">
            <IconButton color="secondary" aria-label="downVote">
              <KeyboardArrowUpIcon />
            </IconButton>
            <Typography variant="subtitle1">{downVotes}</Typography>
          </div>
        </div>
      </div>
    </Container>
  );
};
