import React, { useState } from 'react';
import { LoginFormTag } from './LoginFormStyles';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputs;

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <LoginFormTag onSubmit={handleSubmit}>
      <h2>Faça o login</h2>
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
      <button type="submit">Login</button>
      <h3>
        <Link to="/register" alt="Esqueci minha senha">
          Criar conta
        </Link>
      </h3>
    </LoginFormTag>
  );
};

export default LoginForm;
