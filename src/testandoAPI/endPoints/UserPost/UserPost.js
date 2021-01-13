import React from 'react';
import { Formulario } from './style';
import api from '../../Axios';

const UserPost = () => {
  const [username, setUsername] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post(
      '/api/user',
      {
        username,
        email: Email,
        password: Password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    console.log(response.data);
  }

  return (
    <Formulario onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={Email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={Password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button>Enviar</button>
    </Formulario>
  );
};

export default UserPost;
