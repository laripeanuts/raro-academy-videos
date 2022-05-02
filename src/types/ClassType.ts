import { userType } from "./userType";
import { VideoType } from "./VideoType";

export type ClassType = {
  id: string;
  nome: string;
  descricao: string;
  alunos: userType[];
  videos: VideoType[];
};
