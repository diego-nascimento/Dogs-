import React from 'react';
import Input from '../../Forms/Input/Input';
import Button from '../../Forms/Button/Button';
import useForm from '../../../Hooks/useForm';
import { User_Post } from '../../../services/Api';
import { UserContext } from '../../../UserContext';
import Error from '../../../Helper/Error';
import useFetch from '../../../Hooks/UseFetch';
import Head from '../../../Helper/Head';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();
  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = User_Post({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="anime-Left">
      <Head title="Criar Conta" />
      <h1 className="Title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
