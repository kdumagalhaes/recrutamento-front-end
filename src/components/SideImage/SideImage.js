import React from 'react';
import { SideImageDiv } from './SideImageStyles';

import Logo from '../../components/Logo/Logo'

const SideImage = ({ backgroundImg }) => {
  return (
    <SideImageDiv backgroundImg={backgroundImg}>
      <Logo/>
    </SideImageDiv>
  );
};

export default SideImage;
