import Card from "@components/Card/Card";
import { ICard } from "@components/Card/Card.d";
import { ICardList } from "@components/CardList/";
import { FC } from "react";

const CardList: FC<ICardList> = ({ items, onClose, onEdit, onLike }) => {
  return (
    <ul>
      {items.map(({ id, variant, children, likes }: ICard) => (
        <Card
          id={id}
          key={`item-${id}`}
          variant={variant}
          onClose={onClose}
          onLike={onLike}
          onEdit={onEdit}
          likes={likes}
        >
          {children}
        </Card>
      ))}
    </ul>
  );
};

export default CardList;
