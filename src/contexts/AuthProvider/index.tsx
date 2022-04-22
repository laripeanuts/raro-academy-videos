/* eslint-disable camelcase */
import { DefaultTheme } from "styled-components";
import { createContext, useEffect, useState } from "react";
import { AuthProviderType, AuthType } from "./types";
import { userType } from "../../types/userType";
import apiClient from "../../services/api-client";
import { getLocalUserStorage } from "../../utils/getLocalUserStorage";
import { setLocalUserStorage } from "../../utils/setLocalUserStorage";

const userNew: userType = {
  email: "",
  password: "",
  access_token: "",
  name: "",
  id: "",
  photo: "",
  theme: {} as DefaultTheme,
};

export const AuthContext = createContext<AuthType>({
  user: userNew,
  isAuthenticated: false,
  error: "",
  authenticate: (email: string, password: string) => Promise.resolve(),
  logout: () => {},
});

export const AuthProvider = ({ children }: AuthProviderType) => {
  const [user, setUser] = useState<userType>(userNew);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const thereIsUser = getLocalUserStorage();
    const userToken = thereIsUser?.access_token;
    if (userToken) {
      setUser(thereIsUser);
      setAuthenticated(true);
    }
  }, []);

  async function authenticate(email: string, password: string) {
    try {
      const url = "/auth/login";
      const response = await apiClient.post(url, { email, password });
      const payload = response.data;
      if (payload.access_token) {
        setUser(payload);
        setLocalUserStorage(payload);
        setAuthenticated(true);
      } else {
        setError(payload.error);
      }
    } catch (err: any) {
      if (err.response.data.statusCode === 401) {
        setError("Usuário ou password Inválidos");
      } else {
        setError("Erro ao autenticar usuário. Tente novamente mais tarde.");
      }
    }
  }

  const logout = () => {
    localStorage.clear();
    setUser(userNew);
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        error,
        authenticate,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
