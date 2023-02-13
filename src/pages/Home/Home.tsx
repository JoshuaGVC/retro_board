import { AddButton } from "@components/AddButton";
import { WrapperPrincipal } from "@components/WrapperPrincipal";
import { Columns } from "./Home.styled";
import { Link } from "react-router-dom";
import { useEffect, useReducer, useRef } from "react";
import { ICard, TAction } from "@components/Card";
import { CardList } from "@components/CardList";
import { cardReducer } from "../../reducers/cardReducer";
import { stringify } from "querystring";
import { ICardApp } from "./Home.d";

const Home = () => {
  // const [cardList, setCardList] = useState<ICardApp[]>([]);
  const [wellCards, dispatchWell] = useReducer(cardReducer, []);
  const [improveCArds, dispatchImproveCArds] = useReducer(cardReducer, []);
  const [actionItemCArds, dispatchActionItemCArds] = useReducer(
    cardReducer,
    []
  );

  const init = useRef(false);

  const handlerOnCloseWell = (id: string) => {
    dispatchWell({ type: "remove", payload: { id } });
  };

  const handlerOnLikeWell = (id: string) => {
    dispatchWell({ type: "liked", payload: { id } });
  };

  const handlerOnEditWell = (id: string, text: string) => {
    dispatchWell({ type: "edition", payload: { id, text } });
  };

  const addCardWentWell = (variant: TAction) => {
    dispatchWell({ type: "add", payload: { variant } });
  };

  const handlerOnCloseImprovements = (id: string) => {
    dispatchImproveCArds({ type: "remove", payload: { id } });
  };

  const handlerOnLikeImprovements = (id: string) => {
    dispatchImproveCArds({ type: "liked", payload: { id } });
  };

  const handlerOnEditImprovements = (id: string, text: string) => {
    dispatchImproveCArds({ type: "edition", payload: { id, text } });
  };

  const addCardImprovements = (variant: TAction) => {
    dispatchImproveCArds({
      type: "add",
      payload: { variant },
    });
  };

  const handlerOnCloseActionsItems = (id: string) => {
    dispatchActionItemCArds({ type: "remove", payload: { id } });
  };

  const handlerOnLikeActionsItems = (id: string) => {
    dispatchActionItemCArds({ type: "liked", payload: { id } });
  };

  const handlerOnEditActionsItems = (id: string, text: string) => {
    dispatchActionItemCArds({ type: "edition", payload: { id, text } });
  };

  const addCardActionsItems = (variant: TAction) => {
    dispatchActionItemCArds({
      type: "add",
      payload: { variant },
    });
  };

  const saveInLocalA = (cardsWell: ICardApp[]) => {
    localStorage.setItem("cardsWell", JSON.stringify(cardsWell));
  };

  useEffect(() => {
    if (init.current) {
      saveInLocalA(wellCards);
    }
  }, [wellCards]);

  useEffect(() => {
    let myCards = localStorage.getItem("cardsWell");
    if (myCards) {
      const items = JSON.parse(myCards);
      dispatchWell({ type: "addAll", payload: { list: items as ICardApp[] } });
    }
    init.current = true;
  }, []);

  return (
    <WrapperPrincipal>
      <Columns>
        <AddButton
          onClick={() => {
            addCardWentWell("wentWell");
          }}
        >
          Went well
        </AddButton>
        <CardList
          items={wellCards as ICard[]}
          onLike={handlerOnLikeWell}
          onClose={handlerOnCloseWell}
          onEdit={handlerOnEditWell}
        />
      </Columns>
      <Columns>
        <AddButton
          onClick={() => {
            addCardImprovements("improvements");
          }}
        >
          To improve
        </AddButton>
        <CardList
          items={improveCArds as ICard[]}
          onLike={handlerOnLikeImprovements}
          onClose={handlerOnCloseImprovements}
          onEdit={handlerOnEditImprovements}
        />

        {/* <Card variant="improvements">Improve design of said board</Card> */}
      </Columns>
      <Columns>
        <AddButton
          onClick={() => {
            addCardActionsItems("actionsItems");
          }}
        >
          Action Items
        </AddButton>
        <CardList
          items={actionItemCArds as ICard[]}
          onLike={handlerOnLikeActionsItems}
          onClose={handlerOnCloseActionsItems}
          onEdit={handlerOnEditActionsItems}
        />

        {/* <Card variant="actionsItems">Make sure I follow up</Card> */}
      </Columns>
    </WrapperPrincipal>
  );
};

export default Home;
