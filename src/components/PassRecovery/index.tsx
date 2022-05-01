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
  codigo: string;
  novaSenha: string;
  confirmarSenha: string;
};

const formLoginSchema = yup
  .object({
    codigo: yup.string().required("Código é obrigatório"),
    novaSenha: yup
      .string()
      .required("Senha é obrigatória")
      .min(8, "A senha precisa ter pelo menos 8 caracteres"),
    confirmarSenha: yup
      .string()
      .required("Confirmar senha é obrigatório")
      .oneOf([yup.ref("novaSenha")], "As senhas não conferem"),
  })
  .required();

export const PassRecovery = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const {
    control,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: yupResolver(formLoginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    try {
      setLoading(true);
      const url = "/auth/recuperar-senha";
      const response = await apiClient.patch(url, data);
      setMessage("Nova senha cadastrado com sucesso! Faça o login!");
      setError("");
    } catch (err: any) {
      if (err.response.data.statusCode === 404) {
        setError("Código inválido");
      } else {
        setError("Algo deu errado. Tente novamente mais tarde.");
      }
      setMessage("");
    }

    resetField("codigo");
    resetField("novaSenha");
    resetField("confirmarSenha");
    setLoading(false);
  };

  return (
    <FormStyle>
      <Featured>
        <Typography variant="h4">Altere sua senha!</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            type="text"
            name="codigo"
            placeholder="Código de recuperação"
            control={control}
            aria-invalid={errors.codigo ? "true" : "false"}
          />
          <FormInput
            type="password"
            name="novaSenha"
            placeholder="Nova senha"
            control={control}
            aria-invalid={errors.novaSenha ? "true" : "false"}
          />
          <FormInput
            type="password"
            name="confirmarSenha"
            placeholder="Confirmar nova senha"
            control={control}
            aria-invalid={errors.confirmarSenha ? "true" : "false"}
          />
          <div className="messages">
            <span className="error">{error && error}</span>
            <div className="success">
              {message && (
                <Link className="link" href="/login">
                  {message}
                </Link>
              )}
            </div>
          </div>
          <div className="bottom">
            <Link className="link" href="/pass-forgotten">
              Não possui um código? Solicite um!
            </Link>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <CircularProgress
                  sx={{ color: "white", padding: "8px" }}
                  aria-label="Carregando conteúdo"
                />
              ) : (
                "Alterar"
              )}
            </Button>
          </div>
        </form>
      </Featured>
    </FormStyle>
  );
};
