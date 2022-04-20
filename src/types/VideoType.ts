import { ComentarioType, TagType } from "./Types";

export type VideoType = {
  id: string;
  nome: string;
  thumbUrl: string;
  descricao: string;
  createdAt: Date;
  duracao: string;
  dataPublished: Date;
  topico: string;
  tags: TagType[];
  videosFavoritos: string[];
  comentarios: ComentarioType[];
};
