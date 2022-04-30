import { AlunoType } from "./AlunoType";

export type MeuVoteType = {
  aluno: AlunoType;
  createAt: Date;
  id: string;
  vote: "down" | "up";
};
