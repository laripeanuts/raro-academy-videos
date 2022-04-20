import { VoteType } from "./Types";

export type AlunoType = {
  id: string;
  admin: boolean;
  nome: string;
  email: string;
  foto: string;
  votes: VoteType[];
};
