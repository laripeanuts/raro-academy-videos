import { ReactNode } from "react";

export type VideoDescriptionType = {
  children?: ReactNode;
  title: string;
  description: string;
  date: string;
  week: string;
  isFavorite?: boolean;
  onClickFavorite?: () => void;
  onClickFeed?: () => void;
};
