import React from 'react';
import Input from '../../Forms/Input/Input';
import Button from '../../Forms/Button/Button';
import useForm from '../../../Hooks/useForm';
import Error from '../../../Helper/Error';

import {
  Form,
  Perdeu,
  Cadastro,
  SubTitle,
  ButtonCriar,
} from './LoginForm.style';

import { UserContext } from '../../../UserContext';

const LoginForm = (props) => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="anime-Left">
      <h1 className="Title">Login</h1>
      <Form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled> Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </Form>
      <Perdeu to="/login/perdeu">Perdeu a Senha?</Perdeu>
      <Cadastro>
        <SubTitle>Cadastre-se</SubTitle>
        <p>Ainda não possui conta? Cadaster agora!</p>
        <ButtonCriar to="/login/criar">Cadastro</ButtonCriar>
      </Cadastro>
    </section>
  );
};

export default LoginForm;
