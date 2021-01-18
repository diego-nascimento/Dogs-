import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import { ReactComponent as MinhasFotos } from '../../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../../Assets/sair.svg';

import { Navegacao } from './UserHeaderNav.style';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);

  const { setLogout } = React.useContext(UserContext);
  return (
    <Navegacao>
      <NavLink to="/conta" end activeClassName="active">
        <MinhasFotos />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas" activeClassName="active">
        <Estatisticas />
        {mobile && 'Estatisticas'}
      </NavLink>
      <NavLink to="/conta/postar" activeClassName="active">
        <AdicionarFoto />
        {mobile && 'Adicionar Fotos'}
      </NavLink>
      <button onClick={setLogout}>
        <Sair />
        {mobile && 'Sair'}
      </button>
    </Navegacao>
  );
};

export default UserHeaderNav;
