import { ICard } from "../Card";

export interface ICardList {
  items: ICard[];
  actionCard: ICard.onLike;
}
