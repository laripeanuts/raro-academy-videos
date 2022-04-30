import { AlunoType } from "./AlunoType";
import { MeuVoteType } from "./MeuVoteType";

export type CommentType = {
  id: string;
  texto: string;
  editado: boolean;
  createdAt: Date;
  aluno: AlunoType;
  upVotes: number;
  downVotes: number;
  meuVote?: MeuVoteType;
};
