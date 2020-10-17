import React from 'react';
import { LoginDiv } from './LoginStyles';
import { Helmet } from 'react-helmet';

import SideImage from '../../components/SideImage/SideImage';
import BackgroundImg from '../../assets/bg_login.png';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';

const Login = ({setAuth}) => {
  return (
    <LoginDiv>
      <Helmet>
        <title>nuvemWeb • Login</title>
      </Helmet>
      <SideImage backgroundImg={BackgroundImg} />
      <LoginForm setAuth={setAuth}/>
    </LoginDiv>
  );
};

export default Login;
