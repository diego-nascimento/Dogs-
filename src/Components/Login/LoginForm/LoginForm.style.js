import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  margin-bottom: 2rem;
`;
export const Perdeu = styled(Link)`
  display: inline-block;
  color: #666;
  padding: 0.5rem 0;
  line-height: 1;

  ::after {
    content: '';
    height: 2px;
    width: 100%;
    background: currentColor;
    display: block;
  }
`;

export const Cadastro = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;

  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export const SubTitle = styled.h2`
  font-family: var(--type-second);
  line-height: 1;
  font-size: 2rem;

  ::after {
    content: '';
    display: block;
    background: #ddd;
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }
`;
export const ButtonCriar = styled(Link)`
  font-size: 1rem;
  font-family: var(--typé-first);
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: #fb1;
  color: #764701;
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;

  :hover,
  :focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }
  :disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
