import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Button, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

type LoginFormType = {
  email: string;
  senha: string;
};

const formLoginSchema = yup
  .object({
    email: yup
      .string()
      .email("Digite um e-maiczl válido")
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
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: yupResolver(formLoginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    setLoading(true);
    await authenticate(data.email, data.senha);
    setLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            aria-invalid={errors.email ? "true" : "false"}
          />
          <input type="password" placeholder="Senha" {...register("senha")} />
          {/* erro formulárioo */}
          {errors.email && <span>{errors.email?.message}</span>}
          {errors.senha && <span>{errors.senha?.message}</span>}
          {/* erro api */}
          {error && <span>{error}</span>}
          <Button type="submit" disabled={loading}>
            {loading ? "Carregando..." : "Login"}
          </Button>
        </div>
      </form>
    </main>
  );
};
