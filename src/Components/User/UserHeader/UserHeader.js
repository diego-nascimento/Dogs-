import React from 'react';
import { Header } from './UserHeader.style';
import UserHeaderNav from '../UserHeaderNav/UserHeaderNav';
import { useLocation } from 'react-router';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const Location = useLocation();
  React.useEffect(() => {
    const { pathname } = Location;
    console.log(pathname);
    switch (pathname) {
      case '/conta/estatisticas':
        setTitle('Estatistica');
        break;
      case '/conta/postar':
        setTitle('Poste Sua Foto');
        break;
      default:
        setTitle('Minha Conta');
    }
  }, [Location]);
  return (
    <Header>
      <h1 className="Title">{title}</h1>
      <UserHeaderNav />
    </Header>
  );
};

export default UserHeader;
