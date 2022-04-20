import { AlunoType } from "./AlunoType";
import { VideoType } from "./VideoType";

export type TurmaType = {
  id: string;
  nome: string;
  descricao: string;
  alunos: AlunoType[];
  videos: VideoType[];
};
