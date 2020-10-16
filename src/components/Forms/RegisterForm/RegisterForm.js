import React from 'react';
import { RegisterFormTag } from './RegisterFormStyles';

import Input from '../Inputs/Input';
import PrimaryButton from '../../Buttons/PrimaryButton/PrimaryButton';

const RegisterForm = () => {
  return (
    <RegisterFormTag>
      <h2>Crie sua conta</h2>
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
      <PrimaryButton maxWidth="380px">Criar Conta</PrimaryButton>
      <h3>
        <a href="/login" alt="Esqueci minha senha">
          Fazer login
        </a>
      </h3>
    </RegisterFormTag>
  );
};

export default RegisterForm;
