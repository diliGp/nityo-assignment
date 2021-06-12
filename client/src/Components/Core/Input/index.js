import React from "react";
import { InputContainer, InputLabel, StyledInput } from "./styles";

const Input = ({ label, value, type, onChange }) => {
  return (
    <InputContainer>
      <InputLabel>
        <span>{label}</span>
        <StyledInput onChange={onChange} type={type} value={value} />
      </InputLabel>
    </InputContainer>
  );
};

export default Input;
