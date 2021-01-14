import React from 'react';
import { Botao } from './Button.style';

const Button = ({ children, ...props }) => {
  return <Botao {...props}>{children} </Botao>;
};

export default Button;
