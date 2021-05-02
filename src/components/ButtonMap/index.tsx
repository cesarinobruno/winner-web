import React from "react";

type buttonType = "button" | "submit" | "reset" | undefined;

interface PropsButtonMap {
  nome?: string;
  backgroundColorButton: string | any;
  borderRadiusButton: number | any;
  positionButton: string | any;
  heigthButton: number;
  widthButton: number;
  topButton: number;
  leftButton:number;
  typeButton?: buttonType;
  onClickButton?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonMap: React.FC<PropsButtonMap> = (props: PropsButtonMap) => {
  const {
    backgroundColorButton,
    borderRadiusButton,
    positionButton,
    heigthButton,
    widthButton,
    topButton,
    leftButton,
    typeButton,
    onClickButton,
  } = props;

  return (
    <button
      type={typeButton}
      onClick={onClickButton}
      style={{
        backgroundColor: backgroundColorButton,
        borderRadius: borderRadiusButton,
        position: positionButton,
        height: heigthButton,
        width: widthButton,
        top: topButton,
        left: leftButton,
      }}
    >
    </button>
  );
};

export default ButtonMap;
