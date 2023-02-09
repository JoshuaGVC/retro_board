import { ReactNode } from "react";

export type TAction = "wentWell" | "improvements" | "actionsItems";

export interface ICard {
  id: string;
  variant: TAction;
  children: ReactNode;
  likes: number;
  onClose: (id: string) => void;
  onLike: (id: string) => void;
  onEdit: (id: string) => void;
}
