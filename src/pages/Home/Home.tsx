import { AddButton } from "@components/AddButton";
import { WrapperPrincipal } from "@components/WrapperPrincipal";
import { Columns } from "./Home.styled";
import { Link } from "react-router-dom";
import { useReducer } from "react";
import { ICard } from "@components/Card";
import { CardList } from "@components/CardList";
import { cardReducer } from "../../reducers/cardReducer";

const Home = () => {
  // const [cardList, setCardList] = useState<ICardApp[]>([]);
  const [state, dispatch] = useReducer(cardReducer, []);

  const handlerOnClose = (id: string) => {
    dispatch({ type: "remove", payload: { id } });
  };

  const handleOnLike = (id: string) => {
    dispatch({ type: "liked", payload: { id } });
  };

  const handlerOnEdit = (id: string, text: string) => {
    dispatch({ type: "edition", payload: { id, text } });
  };

  const addCard = () => {
    dispatch({ type: "add" });
  };

  return (
    <WrapperPrincipal>
      <Columns>
        <AddButton onClick={addCard}>Went well</AddButton>
        <CardList
          items={state as ICard[]}
          onLike={handleOnLike}
          onClose={handlerOnClose}
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
