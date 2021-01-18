import React from 'react';
import { Head, Nav, Logo, Login } from './Header.style';

import { ReactComponent as Dogs } from '../../Assets/dogs.svg';

import { UserContext } from '../../UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);
  return (
    <Head>
      <Nav className="container">
        <Logo to="/" aria-label="Dogs - Home">
          <Dogs />
        </Logo>
        {data ? (
          <Login to="/conta">{data.nome}</Login>
        ) : (
          <Login to="/login">Login / Criar Login</Login>
        )}
      </Nav>
    </Head>
  );
};

export default Header;
