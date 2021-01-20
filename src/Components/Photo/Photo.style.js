import styled, { keyframes } from 'styled-components';
import visualizacao from '../../Assets/visualizacao-black.svg';

const scaleUP = keyframes`
  to{
    opacity: initial;
    transform: initial;
  }
`;

export const Photo = styled.div`
  margin: auto;
  height: 36rem;
  border-radius: 0.2rem;
  background: white;
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  animation: ${scaleUP} 0.3s forwards;
  grid-area: 1/1;

  @media (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  }
`;
export const Imagem = styled.div`
  grid-row: 1/4;

  @media (max-width: 64rem) {
    grid-row: 1;
  }
`;
export const Detalhes = styled.div`
  padding: 2rem 2rem 0 2rem;
`;
export const Visualizacoes = styled.span`
  :before {
    display: inline-block;
    content: '';
    width: 16px;
    height: 16px;
    margin-right: 5px;
    background: url(${visualizacao}) no-repeat center center;
  }
`;
export const Titulo = styled.h1``;
export const Atributos = styled.ul`
  display: flex;
  font-size: 1.1125rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;

  li {
    margin-right: 2rem;

    :before {
      content: '';
      display: inline-block;
      height: 20px;
      margin-right: 0.5rem;
      position: relative;
      width: 2px;
      background: #333;
      margin-top: 5px;
    }
  }
`;

export const Author = styled.p`
  opacity: 0.5;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a:hover {
    text-decoration: underline;
  }
`;
