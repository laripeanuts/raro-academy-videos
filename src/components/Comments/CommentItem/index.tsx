import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { useParams } from "react-router-dom";
import { useState } from "react";

import {
  IconButton,
  InputAdornment,
  Tooltip,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import CancelIcon from "@mui/icons-material/Cancel";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";

import apiClient from "../../../services/api-client";
import { useAuth } from "../../../hooks/useAuth";
import { useComments } from "../../../hooks/useComments";

import { CommentType } from "../../../types/CommentType";
import { FormInput } from "../../FormInput";
import { Container, MessageResponse } from "./styles";
import { CommentVoteButton } from "../CommentVoteButton";

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
  meuVote,
}: CommentType) => {
  const { videoId } = useParams();

  const { user, isAuthenticated } = useAuth();
  const { updateList } = useComments();

  const [editavel, setEditavel] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [voteLoading, setVoteLoading] = useState(false);
  const [activeUp, setActiveUp] = useState(false);
  const [activeDown, setActiveDown] = useState(false);

  const isMyComment = user.id === aluno.id;
  const isMyVote = user.id === meuVote?.aluno.id;

  // Formulário Edição
  const {
    handleSubmit,
    control,
    setValue,
    resetField,
    formState: { errors },
  } = useForm<CommentsFormType>({
    resolver: yupResolver(CommentsFormSchema),
  });

  const handleDelete = async (commentId: string) => {
    const url = `/videos/${videoId}/comentarios/${commentId}`;
    console.log(aluno);
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

  const handleUpVote = async (commentId: string) => {
    setVoteLoading(true);
    const url = `/videos/${videoId}/comentarios/${commentId}/votes`;
    try {
      const response = await apiClient.put(url, { vote: "up" });
      setActiveUp(true);
      setActiveDown(false);
      setMessage("");
      updateList();
      console.log(response, "up");
    } catch (err: any) {
      if (err.statusCode === 404) {
        setMessage("Curtida não adicionada.");
      } else {
        setMessage("Algo deu errado. Tente novamente mais tarde!");
      }
    }
    setVoteLoading(false);
  };

  const handleDownVote = async (commentId: string) => {
    setVoteLoading(true);
    const url = `/videos/${videoId}/comentarios/${commentId}/votes`;
    try {
      const response = await apiClient?.put(url, { vote: "down" });
      setActiveDown(true);
      setActiveUp(false);
      setMessage("");
      updateList();
      console.log(response, "down");
    } catch (err: any) {
      if (err.statusCode === 404) {
        setMessage("Descurtida não adicionada.");
      } else {
        setMessage("Algo deu errado. Tente novamente mais tarde!");
      }
    }
    setVoteLoading(false);
  };

  const handledeleteVote = async (commentId: string) => {
    setVoteLoading(true);
    const url = `/videos/${videoId}/comentarios/${commentId}/votes`;
    try {
      const response = await apiClient.delete(url);
      setMessage("");
      setActiveUp(false);
      setActiveDown(false);
      updateList();
      console.log(response, "delete");
    } catch (err: any) {
      if (err.statusCode === 404) {
        setMessage("Descurtida não adicionada.");
      } else {
        setMessage("Algo deu errado. Tente novamente mais tarde!");
      }
    }
    setVoteLoading(false);
  };

  const renderMyActions = () => {
    if (isMyComment) {
      return (
        <div className="commentListActions">
          <Tooltip title="Editar" arrow>
            <EditIcon
              fontSize="small"
              className="edit"
              onClick={() => setEditavel(true)}
            />
          </Tooltip>
          <Tooltip title="Deletar" arrow>
            <ClearIcon
              fontSize="small"
              className="delete"
              onClick={() => {
                handleDelete(id);
              }}
            />
          </Tooltip>
        </div>
      );
    }

    return null;
  };

  const handleEdit: SubmitHandler<CommentsFormType> = async (data) => {
    try {
      setIsLoading(true);
      const url = `/videos/${videoId}/comentarios/${id}`;
      await apiClient.patch(url, data);
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
    setIsLoading(false);
    setEditavel(false);
  };

  const renderMyEdit = () => {
    setValue("texto", texto);
    if (isAuthenticated && isMyComment && editavel) {
      return (
        <form onSubmit={handleSubmit(handleEdit)}>
          <div className="makeComment">
            <Typography variant="body2">Altere seu comentário:</Typography>
            <FormInput
              type="text"
              name="texto"
              placeholder={texto}
              control={control}
              size="small"
              aria-invalid={errors.texto ? "true" : "false"}
              endAdornment={
                <InputAdornment position="end">
                  <CancelIcon
                    onClick={() => setEditavel(false)}
                    className="cancel"
                  />
                </InputAdornment>
              }
            />
            <LoadingButton
              className="button"
              type="submit"
              endIcon={<SendIcon />}
              loading={isLoading}
              loadingPosition="center"
              variant="contained"
              size="medium"
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
      <div className="commentListContainer">
        <div className="commentListHeader">
          <Typography variant="subtitle2">{aluno.nome}</Typography>
          <Typography variant="subtitle1">
            {new Date(createdAt).toLocaleDateString("pt-br")}
          </Typography>
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
        </div>
        <div className="commentListFooter">
          <div className="commentListVotes">
            <div className="vote">
              <CommentVoteButton
                active={activeUp}
                title="Curtir"
                loading={voteLoading}
                onClick={
                  activeUp
                    ? () => handledeleteVote(id)
                    : () => handleUpVote(id)
                }
              >
                <KeyboardArrowUpIcon />
              </CommentVoteButton>
              <Typography variant="subtitle1">{upVotes}</Typography>
            </div>
            <div className="vote">
              <CommentVoteButton
                active={activeDown}
                loading={voteLoading}
                title="Descurtir"
                onClick={
                  activeDown
                    ? () => handledeleteVote(id)
                    : () => handleDownVote(id)
                }
              >
                <KeyboardArrowDownIcon />
              </CommentVoteButton>
              <Typography variant="subtitle1">{downVotes}</Typography>
            </div>
          </div>
          <MessageResponse>
            <Typography variant="subtitle1" sx={{ color: "primary" }}>
              {error && error}
              {message && message}
            </Typography>
          </MessageResponse>
          {renderMyActions()}
        </div>
      </div>
    </Container>
  );
};
