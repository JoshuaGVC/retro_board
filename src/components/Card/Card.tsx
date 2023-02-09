import { FC, useState } from "react";
import {
  Card as CardStyled,
  ButtonX,
  ClapImg,
  ButtonClap,
  WrapperText,
} from "./Card.styled";
import { ICard } from "./Card.d";
import symbolX from "./assets/img/equiz.svg";
import emogiClap from "./assets/img/clapping.svg";

const Card: FC<ICard> = ({
  children,
  variant,
  id,
  onClose,
  onEdit,
  onLike,
  likes,
}) => {
  const [onOrOff, setOnOrOff] = useState(false);
  const [text, setText] = useState("");

  const change = () => {
    setOnOrOff(true);
  };

  const onBlurCard = () => {
    if (text === "") {
      onEdit(id);
    }
    setOnOrOff(false);
  };

  return (
    <CardStyled color={variant} id={id}>
      <WrapperText
        suppressContentEditableWarning={true}
        contentEditable={onOrOff}
        onDoubleClick={() => {
          change();
        }}
        onBlur={onBlurCard}
      >
        {children}
      </WrapperText>

      <ButtonX
        role="deleteCard"
        onClick={() => {
          onClose(id);
        }}
      >
        <img src={symbolX} alt="simbolo X de cerrar" width={16} height={16} />
      </ButtonX>

      <ButtonClap
        role="likeCard"
        onClick={() => {
          onLike(id);
        }}
      >
        <ClapImg src={emogiClap} alt="imagen de aplauso" /> x{likes}
      </ButtonClap>
    </CardStyled>
  );
};

export default Card;
