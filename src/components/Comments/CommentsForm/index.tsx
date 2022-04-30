import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import { IconButton, Typography } from "@mui/material";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { useParams } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useComments } from "../../../hooks/useComments";
import apiClient from "../../../services/api-client";

import { Featured } from "../../Featured";
import { FormInput } from "../../FormInput";
import { CommentList } from "../CommentList";

import { Container } from "./style";
import { CommentFilter } from "../CommentFilter";

type CommentsFormType = {
  texto: string;
};

const CommentsFormSchema = yup
  .object({
    texto: yup.string().required("Digite um comentário"),
  })
  .required();

export const CommentForm = () => {
  const { isAuthenticated } = useAuth();
  const { updateList, comments, setComments } = useComments();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [order, setOrder] = useState(false);

  const { videoId } = useParams();

  const {
    handleSubmit,
    control,
    resetField,
    formState: { errors },
  } = useForm<CommentsFormType>({
    resolver: yupResolver(CommentsFormSchema),
  });

  const onSubmit: SubmitHandler<CommentsFormType> = async (data) => {
    try {
      setLoading(true);
      const url = `/videos/${videoId}/comentarios`;
      await apiClient.post(url, data);
      updateList();
      setError("");
    } catch (err: any) {
      if (err.statusCode === 404) {
        setError("Comentário não enviado");
      } else {
        setError("Algo deu errado. Tente novamente mais tarde");
      }
    }
    resetField("texto");
    setLoading(false);
  };

  const orderByDate = () => setOrder(!order);

  return (
    <Featured sx={{ padding: "10px" }}>
      <Container>
        {error && error}
        <div className="menuFilter">
          <Typography variant="subtitle2">Data</Typography>
          <CommentFilter order={order} onClick={orderByDate} />
        </div>
        <CommentList />
        {isAuthenticated && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="makeComment">
              <FormInput
                type="text"
                name="texto"
                placeholder="Deixe seu comentário"
                control={control}
                aria-invalid={errors.texto ? "true" : "false"}
              />
              <LoadingButton
                className="button"
                type="submit"
                endIcon={<SendIcon />}
                loading={loading}
                loadingPosition="center"
                variant="contained"
                size="large"
              />
            </div>
          </form>
        )}
      </Container>
    </Featured>
  );
};
