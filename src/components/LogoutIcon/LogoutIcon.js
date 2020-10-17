import React from 'react';
import { LogoutIconDiv } from './LogoutIconStyles';

import LogoutSVG from '../../assets/icon-logout.svg'

const LogoutIcon = () => {
  return (
    <LogoutIconDiv>
      <a href="/login" alt="logout">
        <img src={LogoutSVG} alt="logout" />
      </a>
    </LogoutIconDiv>
  );
};

export default LogoutIcon;
