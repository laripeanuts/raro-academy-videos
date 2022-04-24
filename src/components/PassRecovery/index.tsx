import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@mui/material";
import apiClient from "../../services/api-client";
import { FormInput } from "../FormInput";

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
            placeholder="Senha"
            control={control}
            aria-invalid={errors.novaSenha ? "true" : "false"}
          />
          <FormInput
            type="password"
            name="confirmarSenha"
            placeholder="Confirmar senha"
            control={control}
            aria-invalid={errors.confirmarSenha ? "true" : "false"}
          />
          {message && <span>{message}</span>}
          <Button type="submit" disabled={loading}>
            {loading ? "Carregando..." : "Definir nova senha"}
          </Button>
        </div>
      </form>
    </main>
  );
};
