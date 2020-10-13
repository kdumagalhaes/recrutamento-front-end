import React from 'react';
import { ServerCardDiv, ServerCardInfo, ServerCardStatus } from './ServerCardStyles';

import ServerSVG from '../../assets/servidores.svg';

const ServerCard = () => {
  return (
    <ServerCardDiv>
      <ServerCardInfo>
        <span>Nome:</span>
        <p> 1234Server</p> 
        <span>RAM:</span>
        <p>589 MB</p>
        <span>IP:</span>
        <p>170.80.70.161</p>
      </ServerCardInfo>
      <ServerCardStatus>
      <img src={ServerSVG} alt="Server" />
      <span>Status: Ligado</span>
      </ServerCardStatus>
    </ServerCardDiv>
  );
};

export default ServerCard;
