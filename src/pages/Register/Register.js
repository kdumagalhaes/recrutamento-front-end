import React from 'react';
import { RegisterDiv } from './RegisterStyles';
import { Helmet } from 'react-helmet';

import SideImage from '../../components/SideImage/SideImage';
import BackgroundImg from '../../assets/bg_register.png';
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm';

const Register = ( ) => {
  return (
    <RegisterDiv>
      <Helmet>
        <title>nuvemWeb • Registrar</title>
      </Helmet>
      <SideImage backgroundImg={BackgroundImg} />
      <RegisterForm />
    </RegisterDiv>
  );
};

export default Register;
