import { ICard } from "../Card";

export interface ICardList
  extends Pick<ICard, "onClose" | "onLike" | "onEdit"> {
  items: ICard[];
}
