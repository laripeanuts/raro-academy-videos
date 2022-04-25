import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { FormInput } from "../FormInput";
import Link from "../Link";
import { Featured } from "../Featured";
import { FormStyle } from "../../styles/FormStyle";

type LoginFormType = {
  email: string;
  senha: string;
};

const formLoginSchema = yup
  .object({
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("E-mail é obrigatório"),
    senha: yup
      .string()
      .required("Senha é obrigatória")
      .min(8, "A senha precisa ter pelo menos 8 caracteres"),
  })
  .required();

export const Login = () => {
  const { authenticate, error, isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: yupResolver(formLoginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    setLoading(true);
    await authenticate(data.email, data.senha);
    setMessage("Usuário loggado com sucesso!");
    setLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return (
    <FormStyle>
      <Featured>
        <Typography variant="h4">Bem Vindo!</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
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
            <div className="linksContainer">
              <Link className="link" href="/pass-forgotten">
                Esqueci minha senha
              </Link>
              <Link className="link" href="/pass-recovery">
                Altere sua senha
              </Link>
            </div>
            <div className="messages">
              <span className="error">{error && error}</span>
              <span className="success">{message && message}</span>
            </div>
            <div className="bottom">
              <Link className="link" href="/register">
                Não possui uma conta? Faça seu cadastro!
              </Link>
              <Button type="submit" disabled={loading}>
                {loading ? "Carregando..." : "Entrar"}
              </Button>
            </div>
          </div>
        </form>
      </Featured>
    </FormStyle>
  );
};
