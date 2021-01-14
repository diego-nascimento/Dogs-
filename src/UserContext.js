import React from 'react';
import { Token_POST, User_GET, Token_Validate } from './services/Api';
import { useHistory } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useHistory();

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const response = await Token_Validate(token);
          if (response.data.ok) throw new Error('Token Invalido');
          await getUser(token);
        } catch (error) {
          userLogout();
          alert(error);
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, []);

  async function getUser(token) {
    const response = await User_GET(token);
    setData(response.data);
    setLogin(true);
    console.log(response.data);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const response = await Token_POST({ username, password });
      if (!response.data.token) throw new Error('Error: Usuario Invalido');
      window.localStorage.setItem('token', response.data.token);
      await getUser(response.data.token);
      navigate('/conta');
    } catch (error) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function userLogout() {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
  }

  return (
    <UserContext.Provider
      value={{ userLogin, data, userLogout, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
