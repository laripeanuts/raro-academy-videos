/* eslint-disable camelcase */
import { useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { userType } from "../../types/userType";
import apiClient from "../../services/api-client";
import { clearUserDataStorage } from "../../utils/clearUserDataStorage";
import { getLocalUserStorage } from "../../utils/getLocalUserStorage";
import { setLocalUserStorage } from "../../utils/setLocalUserStorage";
import { tokenExpired } from "../../utils/tokenExpired";
import { AuthType, ChildrenProviderType } from "./types";

const userNew: userType = {
  email: "",
  senha: "",
  access_token: "",
  nome: "",
  id: "",
  foto: "",
};

export const AuthContext = createContext<AuthType>({
  user: userNew,
  isAuthenticated: false,
  error: "",
  message: "",
  authenticate: (email: string, senha: string) => Promise.resolve(),
  logout: () => {},
});

export const AuthProvider = ({ children }: ChildrenProviderType) => {
  const [user, setUser] = useState<userType>(userNew);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const thereIsUser = getLocalUserStorage();
    const userToken = thereIsUser?.access_token;
    if (userToken) {
      if (!tokenExpired(userToken)) {
        setUser(thereIsUser);
        setAuthenticated(true);
      } else {
        clearUserDataStorage();
      }
    }
  }, []);

  async function authenticate(email: string, senha: string) {
    try {
      const url = "/auth/login";
      const response = await apiClient.post(url, { email, senha });
      const payload = response.data;
      if (payload.access_token) {
        setUser(payload);
        setLocalUserStorage(payload);
        setAuthenticated(true);
        setMessage("Usuário logado com sucesso!");
        setError("");
      }
    } catch (err: any) {
      if (err.response.data.statusCode === 401) {
        setError("Dados de login inválidos");
      } else {
        setError("Erro ao autenticar usuário. Tente novamente mais tarde.");
      }
    }
  }

  const logout = () => {
    localStorage.clear();
    setUser(userNew);
    setAuthenticated(false);
    setError("");
    setMessage("");
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        error,
        message,
        authenticate,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
