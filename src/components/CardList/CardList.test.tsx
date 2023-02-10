import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CardList from "./CardList";
import { TAction } from "@components/Card/Card.d";

const arr = [
  {
    id: "12345",
    variant: "wentWell" as TAction,
    likes: 0,
    children: "hola",
    onClose: () => {},
    onEdit: () => {},
    onLike: () => {},
  },
];

describe("<CardList/>", () => {
  test("should render the card, when a card is added to the list", () => {
    const handleClick = vi.fn();
    render(
      <CardList
        onClose={handleClick}
        onEdit={() => {}}
        onLike={() => {}}
        items={arr}
      />
    );

    const cardFound = screen.queryByText(arr[0].children);
    expect(cardFound).toBeInTheDocument();
  });
});
