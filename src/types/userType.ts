import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";
import { VoteType } from "./Types";

export type userType = {
  email: string;
  senha: string;
  access_token: string;
  nome: string;
  id: string;
  foto: string;
  admin?: boolean;
  votes?: VoteType[];
};
