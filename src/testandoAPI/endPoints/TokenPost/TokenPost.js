import React from 'react';
import { Formulario } from './style';
import api from '../../Axios';

const TokenPost = () => {
  const [username, setusername] = React.useState('');
  const [Password, setPassword] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.post(
        '/jwt-auth/v1/token',

        {
          username: username,
          password: Password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      console.log(response.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Formulario onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={({ target }) => setusername(target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={Password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button>Enviar</button>
    </Formulario>
  );
};

export default TokenPost;
