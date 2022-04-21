/* eslint-disable camelcase */
import { Button, Input } from "@mui/material";
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../services/api-client";

interface userForm extends FormEvent<HTMLFormElement> {
  children?: React.ReactNode | React.ReactNode[];
}

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const url = "/auth/login";
      const response = await apiClient.post(url, { email, senha });
      const { access_token, id } = response.data;
      console.log(response);
      if (access_token) {
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("id", id);
        navigate("/videos");
      }
    } catch (err: any) {
      if (err.response.data.statusCode === 401) {
        setError("Usuário ou senha Inválidos");
      } else {
        setError("Erro ao autenticar usuário. Tente novamente mais tarde.");
      }
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Logar</h2>
      <form onSubmit={handleLogin}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input
            type="text"
            name="email"
            placeholder="Login"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            placeholder="********"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <div>{error && <div>{error}</div>}</div>
          <Button type="submit" disabled={loading}>
            {loading ? "Carregando..." : "Login"}
          </Button>
        </div>
      </form>
    </div>
  );
};
