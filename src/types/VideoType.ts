import { TagType } from "./TagType";

export type VideoType = {
  id: string;
  nome: string;
  url: string;
  thumbUrl: string;
  descricao: string;
  createdAt: Date;
  duracao: string;
  dataPublicacao: Date;
  topico: string;
  tags: string[];
  turma?: string;
};
