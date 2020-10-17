import React from 'react';
import { TopMenuDiv } from './TopMenuStyles';

import Logo from '../Logo/Logo';
import TopSearch from '../TopSearch/TopSearch';
import LogoutIcon from '../LogoutIcon/LogoutIcon';

const TopMenu = () => {
  return (
    <TopMenuDiv>
      <Logo />
      <TopSearch />
      <LogoutIcon />
    </TopMenuDiv>
  );
};

export default TopMenu;
