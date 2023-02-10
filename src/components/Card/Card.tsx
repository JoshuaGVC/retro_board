import { FC, useRef, useState } from "react";
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
  const [text, setText] = useState(children);

  const elText = useRef<HTMLDivElement | null>(null);

  const change = () => {
    setOnOrOff(true);
  };

  const onBlurCard = () => {
    const newText = (elText.current as HTMLDivElement).textContent;
    if (newText !== text) {
      setText(newText);
      onEdit(id, newText as string);
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
        ref={elText}
      >
        {text}
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
