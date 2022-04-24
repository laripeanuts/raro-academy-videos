import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@mui/material";
import apiClient from "../../services/api-client";
import { FormInput } from "../FormInput";

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
      const response = await apiClient.post(url, data);
      setMessage("Código enviado para seu e-mail");
    } catch (err: any) {
      if (err.statusCode === 404) {
        setMessage("E-mail inválido");
      } else {
        setMessage("Algo deu errado. Tente novamente mais tarde.");
      }
    }
    resetField("email");
    setLoading(false);
  };
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <FormInput
            type="email"
            placeholder="Email"
            name="email"
            control={control}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {message && <span>{message}</span>}
          <Button type="submit" disabled={loading}>
            {loading ? "Carregando..." : "Solicitar código de recuperação"}
          </Button>
        </div>
      </form>
    </main>
  );
};
