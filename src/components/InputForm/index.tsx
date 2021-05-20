import React from "react";

interface InputProps {
  typeInput: string;
  label: string | null;
  className: string;
  description: string;
  required: boolean;
  isLabel: boolean;
  onChange?:  React.ChangeEventHandler<HTMLInputElement>;
}

const InputForm: React.FC<InputProps> = (props: InputProps) => {
  const {
    typeInput,
    label,
    className,
    description,
    required,
    isLabel,
    onChange
  } = props;

  return (
    <>
      <label>{isLabel && label !== null ? label : ""}</label>
      <input
        type={typeInput}
        className={className}
        required={required}
        placeholder={description}
        onChange={onChange}
      />
    </>
  );
};

export default InputForm;
