import styled from 'styled-components';
import Login from '../../../Assets/login.jpg';

export const LoginContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  ::before {
    display: block;
    content: '';
    background: url(${Login}) no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 50rem) {
    grid-template-columns: 1fr;

    ::before {
      display: none;
    }
  }
`;
export const Forms = styled.div`
  max-width: 30rem;
  padding: 1rem;
  margin-top: 15vh;
`;
