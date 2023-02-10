import Card from "@components/Card/Card";
import { ICard } from "@components/Card/Card.d";
import { ICardList } from "@components/CardList/";
import { FC } from "react";

const CardList: FC<ICardList> = ({
  items,
  onClose: close,
  onEdit: edit,
  onLike: like,
}) => {
  return (
    <ul>
      {items.map(({ id, variant, children, likes }: ICard) => (
        <Card
          id={id}
          key={`item-${id}`}
          variant={variant}
          onClose={close}
          onLike={like}
          onEdit={edit}
          likes={likes}
        >
          {children}
        </Card>
      ))}
    </ul>
  );
};

export default CardList;
