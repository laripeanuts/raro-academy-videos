import { ReactNode } from "react";
import { userType } from "../../types/userType";

export type AuthType = {
  user: userType;
  isAuthenticated: boolean;
  error: string;
  message: string;
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

export type AuthContextType = userType & AuthType;

export type AuthProviderType = {
  children: ReactNode;
};
