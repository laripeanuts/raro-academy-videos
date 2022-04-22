import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";
import { VoteType } from "./Types";

export type userType = {
  email: string;
  password: string;
  access_token: string;
  name: string;
  id: string;
  photo: string;
  admin?: boolean;
  votes?: VoteType[];
  theme: DefaultTheme;
};
