import React from 'react';
import { Token_POST, User_GET, Token_Validate } from './services/Api';
import { useNavigate } from 'react-router-dom';
import useAxios from './Hooks/UseAxios';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();
  const { request } = useAxios();

  async function getUser(token) {
    setLogin(true);
    const requestOptions = User_GET(token);
    console.log(requestOptions);
    const response = await request(
      requestOptions.url,
      requestOptions.method,
      requestOptions.data,
      requestOptions.options,
    );
    console.log(response);
    setData(response);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const requestOptions = Token_POST(username, password);
      const response = await request(
        requestOptions.url,
        requestOptions.method,
        requestOptions.data,
        requestOptions.options,
      );
      window.localStorage.setItem('token', response.token);
      await getUser(response.token);
      navigate('/conta');
    } catch (error) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  const userLogout = React.useCallback(
    //deslogar
    function () {
      navigate('/login');
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem('token');
    },
    [navigate],
  );

  React.useEffect(() => {
    //realiza o autoLogin
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const response = await Token_Validate(token);
          if (response.status !== 200) throw new Error('Token Invalido');
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
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, data, userLogout, error, loading, login, setError }}
    >
      {children}
    </UserContext.Provider>
  );
};
