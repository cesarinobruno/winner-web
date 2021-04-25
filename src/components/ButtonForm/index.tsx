import React from "react";
import "./style.css";

type buttonType = "button" | "submit" | "reset" | undefined;

interface ButtonProps {
  type: buttonType;
  className: string;
  nome: string;
  buttonWidth?:  string | number;
  buttonPosition?: number;
  onPressButton?: React.MouseEventHandler<HTMLButtonElement>
}

const ButtonForm: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { type, className, nome, buttonWidth, buttonPosition, onPressButton } = props;
  
  return (
    <button type={type} onClick={onPressButton} className={className} style={{width: buttonWidth, marginLeft: buttonPosition}}>
      {nome}
    </button>
  );
};

export default ButtonForm;
