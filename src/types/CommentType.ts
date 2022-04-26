import { AlunoType } from "./AlunoType";

export type CommentType = {
  id: string;
  texto: string;
  editado: boolean;
  createdAt: Date;
  aluno: AlunoType;
  upVotes: number;
  downVotes: number;
};
