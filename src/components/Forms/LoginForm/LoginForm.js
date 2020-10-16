import React from 'react';
import { LoginFormTag } from './LoginFormStyles';

import Input from '../Inputs/Input';
import PrimaryButton from '../../Buttons/PrimaryButton/PrimaryButton'

const LoginForm = () => {
  return (
    <LoginFormTag>
      <h2>Faça o login</h2>
      <label>Email</label>
      <Input
        id="email"
        name="email"
        maxWidth="380px"
        placeholder="Insira seu e-mail..."
        type="email"
        marginBottom="20px"
      />
      <label>Senha</label>
      <Input
        id="password"
        name="password"
        maxWidth="380px"
        placeholder="Insira sua senha..."
        type="password"
        marginBottom="20px"
      />
      <PrimaryButton maxWidth="380px">
        Login
      </PrimaryButton>
      <a href="/" alt="Esqueci minha senha">Esqueci minha senha</a>
      <h3>
      <a href="/register" alt="Esqueci minha senha">Criar minha conta</a>
      </h3>
    </LoginFormTag>
  );
};

export default LoginForm;
