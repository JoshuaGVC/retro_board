import { AddButton } from "@components/AddButton";
import { WrapperPrincipal } from "@components/WrapperPrincipal";
import { Columns } from "./Home.styled";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, ICard, TAction } from "@components/Card";
import { ICardApp } from "./Home.d";
import { CardList } from "@components/CardList";

const Home = () => {
  const [cardList, setCardList] = useState<ICardApp[]>([]);

  const handerOnClose = (id: string) => {
    const newCArd = [...cardList];
    const indexFound = newCArd.findIndex((item) => item.id === id);
    newCArd.splice(indexFound, 1);
    setCardList(newCArd);
  };

  const handleOnLike = (id: string) => {
    const newCard = [...cardList];
    const indexFound = newCard.findIndex((item) => item.id === id);
    const cardModify = newCard[indexFound];
    const card = { ...cardModify, likes: cardModify.likes + 1 };
    newCard.splice(indexFound, 1, card);
    setCardList(newCard);
  };

  const handlerOnEdit = (id: string, text: string) => {
    const newCard = [...cardList];
    const indexFound = newCard.findIndex((item) => item.id === id);
    const cardModify = newCard[indexFound];
    const card = { ...cardModify, children: text };
    newCard.splice(indexFound, 1, card);
    setCardList(newCard);
  };

  const addCard = () => {
    const newCard = {
      id: crypto.randomUUID(),
      variant: "wentWell" as TAction,
      likes: 0,
      children: "",
    };
    setCardList([...cardList, newCard]);
  };

  useEffect(() => {}, [cardList]);

  return (
    <WrapperPrincipal>
      <Columns>
        <AddButton onClick={addCard}>Went well</AddButton>
        <CardList
          items={cardList as ICard[]}
          onLike={handleOnLike}
          onClose={handerOnClose}
          onEdit={handlerOnEdit}
        />
      </Columns>
      <Columns>
        <AddButton onClick={() => {}}>To improve</AddButton>

        {/* <Card variant="improvements">Improve design of said board</Card> */}
      </Columns>
      <Columns>
        <AddButton onClick={() => {}}>Action Items</AddButton>

        {/* <Card variant="actionsItems">Make sure I follow up</Card> */}
      </Columns>
    </WrapperPrincipal>
  );
};

export default Home;
