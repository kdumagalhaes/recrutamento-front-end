import React from 'react';
import { ServersGridSection } from './ServersGridStyles';

import ServerCard from '../ServerCards/ServerCard';

const ServersGrid = ({ searchTerm }) => {
  return (
    <ServersGridSection>
      <ServerCard searchTerm={searchTerm} />
    </ServersGridSection>
  );
};

export default ServersGrid;
