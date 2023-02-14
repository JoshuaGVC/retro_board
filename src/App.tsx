import { AddButton } from "@components/AddButton";
import { WrapperPrincipal } from "@components/WrapperPrincipal";
import { Columns } from "./App.styled";
import { Dispatch, useEffect, useReducer, useRef } from "react";
import { ICard, TAction } from "@components/Card";
import { CardList } from "@components/CardList";
import {
  cardReducer,
  IAction,
} from "../../retro-board/src/reducers/cardReducer";
import { ICardApp } from "./App.d";

const App = () => {
  // const [cardList, setCardList] = useState<ICardApp[]>([]);
  const [wellCards, dispatchWell] = useReducer(cardReducer, []);
  const [improveCArds, dispatchImproveCArds] = useReducer(cardReducer, []);
  const [actionItemCArds, dispatchActionItemCArds] = useReducer(
    cardReducer,
    []
  );

  const init = useRef(false);

  const addCard = (fn: Dispatch<IAction>, variant: TAction) => {
    return () => {
      fn({ type: "add", payload: { variant } });
    };
  };

  const handlerOnClose = (fn: Dispatch<IAction>, id: string) => {
    return () => {
      fn({ type: "remove", payload: { id } });
    };
  };

  const handlerOnLike = (fn: Dispatch<IAction>, id: string) => {
    return () => {
      fn({ type: "liked", payload: { id } });
    };
  };

  const handlerOnEdit = (fn: Dispatch<IAction>, id: string, text: string) => {
    return () => {
      fn({ type: "edition", payload: { id, text } });
    };
  };

  const saveInLocalA = (key: string, arr: ICardApp[]) => {
    localStorage.setItem(key, JSON.stringify(arr));
  };

  useEffect(() => {
    if (init.current) {
      saveInLocalA("cardWell", wellCards);
    }
  }, [wellCards]);

  useEffect(() => {
    if (init.current) {
      saveInLocalA("cardImprovements", improveCArds);
    }
  }, [improveCArds]);

  useEffect(() => {
    if (init.current) {
      saveInLocalA("cardActionsItems", actionItemCArds);
    }
  }, [actionItemCArds]);

  const getAndSave = (key: string, fn: Dispatch<IAction>) => {
    let myCards = localStorage.getItem(key);
    if (myCards) {
      const items = JSON.parse(myCards);
      fn({ type: "addAll", payload: { list: items as ICardApp[] } });
    }
  };

  useEffect(() => {
    getAndSave("cardWell", dispatchWell);
    getAndSave("cardImprovements", dispatchImproveCArds);
    getAndSave("cardActionsItems", dispatchActionItemCArds);

    init.current = true;
  }, []);

  return (
    <WrapperPrincipal>
      <Columns>
        <AddButton
          onClick={() => {
            addCard(dispatchWell, "wentWell")();
          }}
        >
          Went well
        </AddButton>
        <CardList
          items={wellCards as ICard[]}
          onLike={(id) => handlerOnLike(dispatchWell, id)()}
          onClose={(id) => handlerOnClose(dispatchWell, id)()}
          onEdit={(id, text) => handlerOnEdit(dispatchWell, id, text)()}
        />
      </Columns>
      <Columns>
        <AddButton
          onClick={() => {
            addCard(dispatchImproveCArds, "improvements")();
          }}
        >
          To improve
        </AddButton>
        <CardList
          items={improveCArds as ICard[]}
          onLike={(id) => handlerOnLike(dispatchImproveCArds, id)()}
          onClose={(id) => handlerOnClose(dispatchImproveCArds, id)()}
          onEdit={(id, text) => handlerOnEdit(dispatchImproveCArds, id, text)()}
        />

        {/* <Card variant="improvements">Improve design of said board</Card> */}
      </Columns>
      <Columns>
        <AddButton
          onClick={() => {
            addCard(dispatchActionItemCArds, "actionsItems")();
          }}
        >
          Action Items
        </AddButton>
        <CardList
          items={actionItemCArds as ICard[]}
          onLike={(id) => handlerOnLike(dispatchActionItemCArds, id)()}
          onClose={(id) => handlerOnClose(dispatchActionItemCArds, id)()}
          onEdit={(id, text) =>
            handlerOnEdit(dispatchActionItemCArds, id, text)()
          }
        />

        {/* <Card variant="actionsItems">Make sure I follow up</Card> */}
      </Columns>
    </WrapperPrincipal>
  );
};

export default App;
