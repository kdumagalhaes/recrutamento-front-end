import React from 'react';
import { LogoH1 } from './LogoStyles';

import LogoSVG from '../../assets/nuvemWeb.svg';

const Logo = () => {
  return (
    <LogoH1>
      <a href="/dashboard">
        nuvemWeb
        <img src={LogoSVG} alt="logo nuvemWeb" />
      </a>
    </LogoH1>
  );
};

export default Logo;
