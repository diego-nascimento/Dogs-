import React from 'react';
import { Head, Nav, Logo, Login } from './style';

import { ReactComponent as Dogs } from '../../Assets/dogs.svg';

const Header = () => {
  return (
    <Head>
      <Nav className="container">
        <Logo to="/" aria-label="Dogs - Home">
          <Dogs />
        </Logo>
        <Login to="/login">Login / Criar Login</Login>
      </Nav>
    </Head>
  );
};

export default Header;
