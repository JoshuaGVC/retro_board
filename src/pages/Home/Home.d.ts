import { ReactNode } from "react";
import { ICard } from "../../components/Card";

export interface ICardApp
  extends Pick<ICard, "id" | "variant" | "likes" | "children"> {}

export interface IColumns {
  children: ReactNode;
}
