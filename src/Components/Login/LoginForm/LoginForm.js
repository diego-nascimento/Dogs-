import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <section>
      <h1>Login</h1>
      <form action="">
        <input
          placeholder="Usuario"
          type="text"
          value={username}
          onChange={(target) => setUsername(target.value)}
        />
        <input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(target) => setPassword(target.value)}
        />
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
