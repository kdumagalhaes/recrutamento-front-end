import React, { useState } from 'react';
import { RegisterFormTag } from './RegisterFormStyles';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

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

    try {
      const url = 'http://localhost:3333/auth/register';
      const body = { email, password };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem('token', parseRes.token);
        setAuth(true);
        toast.success('Usuário cadastrado com sucesso!');
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
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
