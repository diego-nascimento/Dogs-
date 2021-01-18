import React from 'react';
import { User_GET, Token_POST, Token_Validate } from './services/Api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const navigate = useNavigate();

  async function getUser(token) {
    const { url, options } = User_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = Token_POST({ username, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error('Error:  Erro ao logar');
      const { token } = await tokenRes.json();
      localStorage.setItem('token', token);
      if (token) {
        console.log(token);
        await getUser(token);
      }
      navigate('/conta');
    } catch (error) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  const setLogout = React.useCallback(
    async function () {
      setData(null);
      setLogin(false);
      setLoading(false);
      setError(null);
      localStorage.removeItem('token');
      navigate('/login');
    },
    [navigate],
  );

  React.useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = Token_Validate(token);
          const response = await fetch(url, options);
          if (!response.ok) {
            throw new Error('Token Invalido');
          } else {
            await getUser(token);
          }
        } catch (error) {
          setLogout();
          setError(error.message);
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [setLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, data, loading, setLogout, error, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
