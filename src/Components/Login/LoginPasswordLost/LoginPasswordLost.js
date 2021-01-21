import React from 'react';
import Input from '../../Forms/Input/Input';
import Button from '../../Forms/Button/Button';
import useForm from '../../../Hooks/useForm';
import useFetch from '../../../Hooks/UseFetch';
import { PASSWORD_LOST } from '../../../services/Api';
import Error from '../../../Helper/Error';
import Head from '../../../Helper/Head';

const LoginPasswordLost = () => {
  const login = useForm();
  const { request, data, error, loading } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      request(url, options);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Perdeu a senha?" />
      <h1 className="Title">Perdeu a Senha?</h1>
      {data ? (
        <p style={{ color: '#471' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Login / Usuario" type="text" name="email" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar</Button>
          )}
          <Error error={error} />
        </form>
      )}
    </section>
  );
};

export default LoginPasswordLost;
