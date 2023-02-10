import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Card from "./Card";
import userEvent from "@testing-library/user-event";

describe("<Card likes={1} /> ", () => {
  test("should show the content per default, when render the card", () => {
    render(
      <Card
        likes={1}
        id=""
        onClose={() => {}}
        onLike={() => {}}
        onEdit={() => {}}
        variant={"wentWell"}
      >
        cualquier texto
      </Card>
    );
    const content = screen.queryByText("cualquier texto");

    expect(content).toBeInTheDocument();
  });

  test("should not show the content per default, when render the card", () => {
    render(
      <Card
        likes={1}
        id=""
        onClose={() => {}}
        onLike={() => {}}
        onEdit={() => {}}
        variant={"wentWell"}
      >
        cualquier texto
      </Card>
    );
    const content = screen.queryByText("otro texto");

    expect(content).not.toBeInTheDocument();
  });

  test("should change the background color, when the property has a certain value", () => {
    const { container } = render(
      <Card
        likes={1}
        id=""
        onClose={() => {}}
        onLike={() => {}}
        onEdit={() => {}}
        variant={"wentWell"}
      >
        hola
      </Card>
    );
    const styles = window.getComputedStyle(container.firstChild as Element);
    expect(styles.backgroundColor).toEqual("rgb(46, 204, 113)");
  });

  test("should not change the background color, when the property has a certain value", () => {
    const { container } = render(
      <Card
        likes={1}
        id=""
        onClose={() => {}}
        onLike={() => {}}
        onEdit={() => {}}
        variant={"wentWell"}
      >
        hola
      </Card>
    );
    const styles = window.getComputedStyle(container.firstChild as Element);
    expect(styles.backgroundColor).not.toEqual("rgb(50, 204, 114)");
  });

  test("should change the background color, when the property has a certain value", () => {
    const { container } = render(
      <Card
        likes={1}
        id=""
        onClose={() => {}}
        onLike={() => {}}
        onEdit={() => {}}
        variant={"improvements"}
      >
        hola
      </Card>
    );
    const styles = window.getComputedStyle(container.firstChild as Element);
    expect(styles.backgroundColor).toEqual("rgb(241, 196, 15)");
  });

  test("should not change the background color, when the property has a certain value", () => {
    const { container } = render(
      <Card
        likes={1}
        id=""
        onClose={() => {}}
        onLike={() => {}}
        onEdit={() => {}}
        variant={"wentWell"}
      >
        hola
      </Card>
    );
    const styles = window.getComputedStyle(container.firstChild as Element);
    expect(styles.backgroundColor).not.toEqual("rgb(503, 300, 114)");
  });

  test("should change the background color, when the property has a certain value", () => {
    const { container } = render(
      <Card
        likes={1}
        id=""
        onClose={() => {}}
        onLike={() => {}}
        onEdit={() => {}}
        variant={"actionsItems"}
      >
        hola
      </Card>
    );
    const styles = window.getComputedStyle(container.firstChild as Element);
    expect(styles.backgroundColor).toEqual("rgb(155, 89, 182)");
  });

  test("should not change the background color, when the property has a certain value", () => {
    const { container } = render(
      <Card
        likes={1}
        id=""
        onClose={() => {}}
        onLike={() => {}}
        onEdit={() => {}}
        variant={"wentWell"}
      >
        hola
      </Card>
    );
    const styles = window.getComputedStyle(container.firstChild as Element);
    expect(styles.backgroundColor).not.toEqual("rgb(170, 400, 130)");
  });

  test("should execute the function, when you do dobleckick in the section of the text", async () => {
    const handleClick = vi.fn();

    render(
      <Card
        likes={1}
        id="123456hh"
        onClose={() => {}}
        onLike={() => {}}
        onEdit={handleClick}
        variant={"wentWell"}
      >
        {" "}
      </Card>
    );

    const card = screen.getByRole("editCard");

    await userEvent.dblClick(card);
    await userEvent.type(screen.getByRole("editCard"), "joshua");
    fireEvent.blur(card);
    screen.debug();
    expect(handleClick).toBeCalled();
  });

  test("should execute the function, when you click on the button of the close", async () => {
    const handleClick = vi.fn();

    render(
      <Card
        likes={1}
        id="123456hh"
        onClose={handleClick}
        onLike={() => {}}
        onEdit={() => {}}
        variant={"wentWell"}
      >
        hola
      </Card>
    );

    const buttonClose = screen.queryByRole("deleteCard");

    await userEvent.click(buttonClose as HTMLElement);
    expect(handleClick).toBeCalledWith("123456hh");
  });

  test("should execute the function, when you click on the button of like", async () => {
    const handleClick = vi.fn();

    render(
      <Card
        likes={1}
        id="123456hh"
        onClose={() => {}}
        onLike={handleClick}
        onEdit={() => {}}
        variant={"wentWell"}
      >
        hola
      </Card>
    );

    const buttonLike = screen.queryByRole("likeCard");
    await userEvent.click(buttonLike as HTMLElement);
    expect(handleClick).toBeCalledWith("123456hh");
  });
});
