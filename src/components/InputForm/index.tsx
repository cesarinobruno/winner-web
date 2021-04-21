import React from "react";

interface InputProps {
  typeInput: string;
  label: string | null;
  className: string;
  description: string;
  required: boolean;
  isLabel: boolean;
}

const InputForm: React.FC<InputProps> = (props: InputProps) => {
  const { typeInput, label, className, description, required, isLabel } = props;
  return (
    <>
      <label>{isLabel && label !== null ? label : ""}</label>
      <input
        type={typeInput}
        className={className}
        required={required}
        placeholder={description}
      />
    </>
  );
};

export default InputForm;
