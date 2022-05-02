import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Button, CircularProgress, Typography } from "@mui/material";
import apiClient from "../../services/api-client";
import { FormInput } from "../FormInput";
import { FormStyle } from "../../styles/FormStyle";
import { Featured } from "../Featured";
import Link from "../Link";

type LoginFormType = {
  email: string;
};

const formRecoverySchema = yup
  .object({
    email: yup
      .string()
      .email("Digite seu e-mail para recuperar a senha")
      .required("E-mail é obrigatório"),
  })
  .required();

export const PassForgotten = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const {
    control,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: yupResolver(formRecoverySchema),
  });

  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    try {
      setLoading(true);
      const url = "/auth/solicitar-codigo";
      await apiClient.post(url, data);
      setMessage("Código enviado para seu e-mail");
      setError("");
    } catch (err: any) {
      if (err.statusCode === 404) {
        setError("E-mail inválido");
      } else {
        setError("Algo deu errado. Tente outro e-mail.");
      }
      setMessage("");
    }
    resetField("email");
    setLoading(false);
  };

  return (
    <FormStyle>
      <Featured>
        <Typography variant="h4">Solicite um código!</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            type="email"
            placeholder="E-mail"
            name="email"
            control={control}
            aria-invalid={errors.email ? "true" : "false"}
          />
          <div className="linksContainer">
            <Link className="link" href="/login">
              Lembrou a senha?
            </Link>
          </div>
          <div className="messages">
            <span className="error">{error || null}</span>
            <span className="success">{message || null}</span>
          </div>
          <div className="bottom">
            <Link className="link" href="/pass-recovery">
              Já possui um código? Troque sua senha!
            </Link>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <CircularProgress
                  sx={{ color: "white", padding: "8px" }}
                  aria-label="Carregando conteúdo"
                />
              ) : (
                "Solicitar"
              )}
            </Button>
          </div>
        </form>
      </Featured>
    </FormStyle>
  );
};
