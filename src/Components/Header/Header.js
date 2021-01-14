import React from 'react';
import { Head, Nav, Logo, Login } from './Header.style';

import { ReactComponent as Dogs } from '../../Assets/dogs.svg';

import { UserContext } from '../../UserContext';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <Head>
      <Nav className="container">
        <Logo to="/" aria-label="Dogs - Home">
          <Dogs />
        </Logo>
        {data ? (
          <Login to="/conta">
            {data.nome} <button onClick={userLogout}>Sair</button>
          </Login>
        ) : (
          <Login to="/login">Login / Criar Login</Login>
        )}
      </Nav>
    </Head>
  );
};

export default Header;
