import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import LoginCreate from '../LoginCreate/LoginCreate';
import LoginPasswordLost from '../LoginPasswordLost/LoginPasswordLost';
import LoginPasswordReset from '../LoginPasswordReset/LoginPasswordReset';
import {} from './style';

const Login = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" exact component={LoginForm} />
        <Route path="/login/criar" component={LoginCreate} />
        <Route path="/login/perdeu" component={LoginPasswordLost} />
        <Route path="/login/resetar" component={LoginPasswordReset} />
      </Switch>
    </div>
  );
};

export default Login;
