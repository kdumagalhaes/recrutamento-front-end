import React from 'react';
import { TopMenuDiv } from './TopMenuStyles';

import Logo from '../Logo/Logo';
import TopSearch from '../TopSearch/TopSearch';
import LogoutIcon from '../LogoutIcon/LogoutIcon';

const TopMenu = ({setAuth}) => {
  return (
    <TopMenuDiv>
      <Logo />
      <TopSearch />
      <LogoutIcon setAuth={setAuth} />
    </TopMenuDiv>
  );
};

export default TopMenu;
