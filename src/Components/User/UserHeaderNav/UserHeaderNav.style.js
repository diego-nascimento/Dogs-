import styled from 'styled-components';

export const Navegacao = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a,
  button {
    background: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;
  }

  @media (max-width: 41rem) {
    display: block;
    position: absolute;
    top: 70px;
    right: 0px;
    padding: 0 1rem;
    background: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;
    transform: ${(props) =>
      props.mobileState ? 'translateX(0px)' : 'translateX(-10px)'};
    opacity: ${(props) => (props.mobileState ? '0' : '1')};
    transition: 0.3s;
    z-index: 100;
    pointer-events: ${(props) => (props.mobileState ? 'none' : 'pointer')};
    opacity: ${(props) => (props.mobileState ? '0' : '1')};
    cursor: ${(props) => (props.mobileState ? 'initial' : 'none')};

    a,
    button {
      display: flex;
      align-items: center;
      background: none;
      width: 100%;
      border: none;
      border-bottom: 1px solid #eee;
      padding: 0.5rem 0;
      cursor: pointer;
    }
    a:hover svg > *,
    button:hover > * {
      fill: #fb1;
      border-color: #fb1;
    }

    svg {
      margin-right: 0.5rem;
    }
  }

  a:hover,
  button:hover,
  a:focus,
  button:focus {
    background: white;
    box-shadow: 0 0 0 3px #eee;
    border-color: #fb1;
  }

  a.active {
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;

    svg > * {
      fill: #fb1;
    }
  }
`;

export const MobileButton = styled.button`
  background: #eee;
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;
  transition: 0.5s;

  :focus,
  :hover {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;
  }

  :after {
    content: '';
    display: block;
    width: ${(props) => (props.mobileMenu ? '4px' : '1.2rem')};
    height: ${(props) => (props.mobileMenu ? '4px' : '2px')};
    transform: ${(props) =>
      props.mobileMenu ? 'rotate(90deg)' : 'rotate(0deg)'};
    background-color: currentColor;
    box-shadow: ${(props) =>
      props.mobileMenu
        ? '0 8px currentColor, 0 -8px currentColor'
        : '0 6px currentColor, 0 -6px currentColor'};
  }
`;
