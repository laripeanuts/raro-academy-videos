import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import apiClient from "../../services/api-client";

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
  const navigate = useNavigate();

  const {
    register,
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
      setMessage("Usuário cadastrado com sucesso!");
    } catch (err: any) {
      if (err.response.data.statusCode === 400) {
        setMessage("Usuário já cadastrado");
      } else {
        setMessage("Usuário não cadastrado. Tente novamente mais tarde.");
      }
    }
    resetField("nome");
    resetField("email");
    resetField("senha");
    resetField("confirmarSenha");
    setLoading(false);
  };

  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input
            type="text"
            placeholder="Nome Completo"
            {...register("nome")}
          />
          <input type="email" placeholder="E-mail" {...register("email")} />
          <input type="password" placeholder="Senha" {...register("senha")} />
          <input
            type="password"
            placeholder="Confirmar senha"
            {...register("confirmarSenha")}
          />
          {/* erro formulário */}
          {errors.nome && <span>{errors.nome?.message}</span>}
          {errors.email && <span>{errors.email?.message}</span>}
          {errors.senha && <span>{errors.senha?.message}</span>}
          {errors.confirmarSenha && (
            <span>{errors.confirmarSenha?.message}</span>
          )}
          {/* erro api */}
          {message && <span>{message}</span>}
          <Button type="submit" disabled={loading}>
            {loading ? "Carregando..." : "Login"}
          </Button>
        </div>
      </form>
    </main>
  );
};
