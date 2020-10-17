import React from 'react';
import { RegisterDiv } from './RegisterStyles';
import { Helmet } from 'react-helmet';

import SideImage from '../../components/SideImage/SideImage';
import BackgroundImg from '../../assets/bg_register.png';
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm';

const Register = ({ setAuth }) => {
  return (
    <RegisterDiv>
      <Helmet>
        <title>nuvemWeb • Registrar</title>
      </Helmet>
      <SideImage backgroundImg={BackgroundImg} />
      <RegisterForm setAuth={setAuth} />
    </RegisterDiv>
  );
};

export default Register;
