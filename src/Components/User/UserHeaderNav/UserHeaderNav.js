import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import { ReactComponent as MinhasFotos } from '../../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../../Assets/sair.svg';
import useMedia from '../../../Hooks/useMedia';

import { Navegacao, MobileButton } from './UserHeaderNav.style';

const UserHeaderNav = () => {
  const mobile = useMedia('(max-width: 40rem)');
  const { setLogout } = React.useContext(UserContext);
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  React.useEffect(() => {
    mobile === false ? setMobileMenu(false) : setMobileMenu(true);
  }, [mobile]);

  return (
    <>
      {mobile && (
        <MobileButton
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          mobileMenu={mobileMenu}
        ></MobileButton>
      )}

      <Navegacao mobileState={mobileMenu}>
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
    </>
  );
};

export default UserHeaderNav;
