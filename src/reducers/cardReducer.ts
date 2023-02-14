import { TAction } from "../components/Card";
import { ICardApp } from "../App.d";

export interface IPayload {
  id?: string;
  text?: string;
  variant?: TAction;
  list?: ICardApp[];
}

type TType = "add" | "remove" | "liked" | "edition" | "addAll";

export interface IAction {
  type: TType;
  payload?: IPayload;
}

export const cardReducer = (state: ICardApp[], action: IAction) => {
  const newState = [...state];

  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: crypto.randomUUID(),
          variant: action.payload?.variant as TAction,
          likes: 0,
          children: "",
        },
      ];

    case "remove":
      const indexFound = newState.findIndex(
        (item) => item.id === action.payload?.id
      );
      newState.splice(indexFound, 1);
      return newState;

    case "liked":
      const indexPosition = newState.findIndex(
        (item) => item.id === action.payload?.id
      );
      const cardModify1 = newState[indexPosition];
      const card2 = { ...cardModify1, likes: cardModify1.likes + 1 };
      newState.splice(indexPosition, 1, card2);
      return newState;

    case "edition":
      const positionIndex = newState.findIndex(
        (item) => item.id === action.payload?.id
      );
      const cardModify2 = newState[positionIndex];
      const card = { ...cardModify2, children: action.payload?.text! };
      newState.splice(positionIndex, 1, card);
      return newState;

    case "addAll":
      return action.payload!.list!;
  }
};
