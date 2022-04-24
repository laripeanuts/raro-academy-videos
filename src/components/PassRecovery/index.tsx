import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Button, Input } from "@mui/material";
import apiClient from "../../services/api-client";

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

  const {
    register,
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
      const response = await apiClient.post(url, data);
      setMessage("Nova senha cadastrado com sucesso!");
    } catch (err: any) {
      if (err.response.data.statusCode === 404) {
        setMessage("Código inválido");
      } else {
        setMessage("Algo deu errado. Tente novamente mais tarde.");
      }
    }

    resetField("codigo");
    resetField("novaSenha");
    resetField("confirmarSenha");
    setLoading(false);
  };

  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input
            type="text"
            placeholder="Código de recuperação"
            {...register("codigo")}
            aria-invalid={errors.codigo ? "true" : "false"}
          />
          <input
            type="password"
            placeholder="Senha"
            {...register("novaSenha")}
            aria-invalid={errors.novaSenha ? "true" : "false"}
          />
          <input
            type="password"
            placeholder="Confirmar senha"
            {...register("confirmarSenha")}
            aria-invalid={errors.confirmarSenha ? "true" : "false"}
          />
          {message && <span>{message}</span>}
          {errors.codigo && <span>{errors.codigo?.message}</span>}
          {errors.novaSenha && <span>{errors.novaSenha?.message}</span>}
          <Button type="submit" disabled={loading}>
            {loading ? "Carregando..." : "Definir nova senha"}
          </Button>
        </div>
      </form>
    </main>
  );
};
