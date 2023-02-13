import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { TAction } from "./Card.d";

const getColor = (action: TAction) => {
  switch (action) {
    case "wentWell":
      return ["#2ECC71", "#97E5B8"];
    case "improvements":
      return ["#F1C40F", "#F8E187"];
    case "actionsItems":
      return ["#9B59B6", "#CDACDB"];
  }
};

interface ICardBackground {
  color: TAction;
}

const slideUp = keyframes`
  from {
      opacity: 0;
      transform: translateY(80px);
    }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Card = styled.li<ICardBackground>`
  box-sizing: border-box;
  background-color: ${(props) => getColor(props.color)[0]};
  min-height: 104px;
  width: 350px;
  margin-bottom: 25px;
  border: none;
  font-family: "Sulphur Point";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 21px;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 5px 5px 0px ${(props) => getColor(props.color)[1]};
  position: relative;
  animation: ${slideUp} 0.25s ease;
`;

export const WrapperText = styled.div`
  width: 82.8571%;
  outline: none;
`;

export const ButtonX = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  width: 47.5px;
  height: 47.5px;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.25s ease;

  &:active {
    transform: translateY(2px);
  }
`;

export const ButtonClap = styled.button`
  position: absolute;
  background-color: transparent;
  width: 50px;
  height: 45px;
  right: 10px;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 21px;
  line-height: 21px;
  color: white;
`;

export const ClapImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 7px;
  display: block;
`;
