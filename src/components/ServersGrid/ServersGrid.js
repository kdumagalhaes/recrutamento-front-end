import React from 'react';
import { ServersGridSection, LoaderPositionDiv } from './ServersGridStyles';

import ServerCard from '../ServerCards/ServerCard';
import LoadingDots from '../LoadingDots/LoadingDots';

const ServersGrid = () => {
  return (
    <ServersGridSection>
      <LoaderPositionDiv>
        <LoadingDots />
      </LoaderPositionDiv>
      <ServerCard />
    </ServersGridSection>
  );
};

export default ServersGrid;
