import React, {Fragment } from 'react';
import { FormTag } from './FormStyles';

import Input from '../Inputs/Input';
import PrimaryButton from '../../Buttons/PrimaryButton/PrimaryButton'

const LoginForm = () => {
  return (
    <FormTag>
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
    </FormTag>
  );
};

export default LoginForm;
