import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { IconButton } from "@mui/material";
import { Featured } from "../../Featured";

import { FormInput } from "../../FormInput";

import { useAuth } from "../../../hooks/useAuth";
import apiClient from "../../../services/api-client";
import { Container } from "./style";
import { CommentList } from "../CommentList";
import Link from "../../Link";

type CommentsFormType = {
  comentarios: string;
};

const CommentsFormSchema = yup
  .object({
    comentarios: yup.string().required("Digite um comentário"),
  })
  .required();

export const CommentForm = () => {
  const { user, isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [dataFilter, setDateFilter] = useState(true);

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
      const url = "/auth/solicitar-codigo";
      const response = await apiClient.post(url, data);
      setMessage("Código enviado para seu e-mail");
      setError("");
    } catch (err: any) {
      if (err.statusCode === 404) {
        setError("Comentário não enviado");
      } else {
        setError("Algo deu errado. Tente novamente mais tarde");
      }
      setMessage("");
    }
    resetField("comentarios");
    setLoading(false);
  };

  return (
    <Featured padding={10}>
      <Container>
        <div className="menuFilter">
          <Link href="/" className="menuItem">
            Data
          </Link>
          <IconButton color="primary" aria-label="add to shopping cart">
            {dataFilter ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
          </IconButton>
        </div>
        <CommentList />
        {isAuthenticated && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="makeComment">
              <FormInput
                type="text"
                name="comentarios"
                placeholder="Deixe seu comentário"
                control={control}
                aria-invalid={errors.comentarios ? "true" : "false"}
              />
              <LoadingButton
                className="button"
                type="submit"
                endIcon={<SendIcon />}
                loading={loading}
                loadingPosition="end"
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
