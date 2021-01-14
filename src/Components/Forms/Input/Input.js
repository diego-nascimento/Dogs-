import React from 'react';
import { Wrapper, Label, Campo, Error } from './Input.style';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <Campo
        type={type}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      ></Campo>
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default Input;
