import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import apiClient from "../../services/api-client";
import { FormInput } from "../FormInput";
import { FormStyle } from "../../styles/FormStyle";
import { Featured } from "../Featured";
import Link from "../Link";

type LoginFormType = {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
};

const formRegisterSchema = yup
  .object({
    nome: yup.string().required("Nome é obrigatório"),
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("E-mail é obrigatório"),
    senha: yup
      .string()
      .required("Senha é obrigatória")
      .min(8, "A senha precisa ter pelo menos 8 caracteres"),
    confirmarSenha: yup
      .string()
      .required("Confirmar senha é obrigatório")
      .oneOf([yup.ref("senha")], "As senhas não conferem"),
  })
  .required();

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const {
    control,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: yupResolver(formRegisterSchema),
  });

  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    try {
      setLoading(true);
      const url = "/auth/cadastrar";
      const response = await apiClient.post(url, data);
      setMessage("Usuário cadastrado com sucesso! Faça o login!");
      setError("");
    } catch (err: any) {
      if (err.response.data.statusCode === 400) {
        setError("Usuário já cadastrado");
      } else {
        setError("Usuário não cadastrado. Tente novamente mais tarde.");
      }
      setMessage("");
    }
    resetField("nome");
    resetField("email");
    resetField("senha");
    resetField("confirmarSenha");
    setLoading(false);
  };

  return (
    <FormStyle>
      <Featured>
        <Typography variant="h4">Bem Vindo!</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            type="text"
            name="nome"
            placeholder="Nome Completo"
            control={control}
            aria-invalid={errors.nome ? "true" : "false"}
          />
          <FormInput
            type="email"
            name="email"
            placeholder="E-mail"
            control={control}
            aria-invalid={errors.email ? "true" : "false"}
          />
          <FormInput
            type="password"
            name="senha"
            placeholder="Senha"
            control={control}
            aria-invalid={errors.senha ? "true" : "false"}
          />
          <FormInput
            type="password"
            name="confirmarSenha"
            placeholder="Confirmar senha"
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
            <Link className="link" href="/login">
              Não possui uma conta? Faça seu cadastro!
            </Link>
            <Button type="submit" disabled={loading}>
              {loading ? "Carregando..." : "Cadastrar"}
            </Button>
          </div>
        </form>
      </Featured>
    </FormStyle>
  );
};
