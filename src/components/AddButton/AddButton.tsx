import { FC } from "react";
import { Button } from "./AddButton.styled";
import { IAddButton } from "./AddButton.d";
import signoMas from "./assets/img/mas.svg";

const AddButton: FC<IAddButton> = ({ children, onClick }) => {
  return (
    <Button onClick={onClick}>
      {children}
      <img src={signoMas} alt="signo mas" />
    </Button>
  );
};

export default AddButton;
