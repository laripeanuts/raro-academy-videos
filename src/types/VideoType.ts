import { TagType } from "./TagType";

export type VideoType = {
  id: string;
  nome: string;
  thumbUrl: string;
  descricao: string;
  createdAt: Date;
  duracao: string;
  dataPublicacao: Date;
  topico: string;
  tags: TagType[];
  turma?: string;
};
