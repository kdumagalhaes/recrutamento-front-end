import React, { useState } from 'react';
import { LoginFormTag } from './LoginFormStyles';
import { toast } from "react-toastify";
import {Link} from 'react-router-dom'

const LoginForm = ({ setAuth }) => {
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
      const body = { email, password };
      const response = await fetch(
        'http://localhost:3333/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      );

      const parseRes = await response.json();
      
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        toast.success("Olá! Logado com sucesso!", {
          position: toast.POSITION.CENTER
        });
      } else {
        setAuth(false);
        toast.error(parseRes);
      }

    } catch (err) {
      console.error(err.message);
    }
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
      <button type="submit">
        Login
      </button>
      <h3>
        <Link to="/register" alt="Esqueci minha senha">
          Criar conta
        </Link>
      </h3>
    </LoginFormTag>
  );
};

export default LoginForm;
