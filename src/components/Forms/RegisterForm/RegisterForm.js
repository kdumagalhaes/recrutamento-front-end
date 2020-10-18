import React, { useState } from 'react';
import { RegisterFormTag } from './RegisterFormStyles';
import { Link } from 'react-router-dom';

const RegisterForm = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputs;

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <RegisterFormTag onSubmit={handleSubmit}>
      <h2>Crie sua conta</h2>
      <label>Email</label>
      <input
        id="email"
        name="email"
        placeholder="Insira seu e-mail..."
        type="email"
        value={email}
        onChange={(e) => handleChange(e)}
      />
      <label>Senha</label>
      <input
        id="password"
        name="password"
        placeholder="Insira sua senha..."
        type="password"
        value={password}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">
        Criar Conta
      </button>
      <h3>
        <Link to="/login" alt="Esqueci minha senha">
          Fazer login
        </Link>
      </h3>
    </RegisterFormTag>
  );
};

export default RegisterForm;
