import React, { useState, useEffect } from 'react';
import {
  ServerCardDiv,
  ServerCardInfo,
  ServerCardStatus,
} from './ServerCardStyles';

import ServerSVG from '../../assets/servidores.svg';
import axios from 'axios';

const ServerCard = ({ searchTerm }) => {
  const [servers, setServer] = useState([]);
  const url = 'https://recrutamento.alterdata.cloud/listaServidor';
  const bearer =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgxLCJpYXQiOjE2MDI2ODIyNjksImV4cCI6MzIwNTM2ODEzOH0.z4th2DLRutANTv19yNY1MQiGN1biuKMvSQWButoW3IQ';
  // console.log(searchTerm)

  useEffect(() => {
    axios
      .get(url, {
        method: 'POST',
        headers: {
          Authorization: bearer,
        },
      })
      .then((res) => {
        setServer(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //pesquisa dos servidores

  const filteredServers =
    servers.filter((server) =>
      server.Instance.toLowerCase().includes(searchTerm.toLowerCase())
    ) || servers.filter((server) => server.InstanceId.includes(searchTerm));

  return filteredServers.map((server) => (
    <ServerCardDiv key={server.InstanceId}>
      <ServerCardInfo>
        <span>Nome:</span>
        <p>{server.Instance}</p>
        <span>RAM:</span>
        <p>589 MB</p>
        <span>IP:</span>
        <p>{server.PublicIpAddress ? server.PublicIpAddress : 'No IP found'}</p>
        <span>Processador:</span>
        <p>{server.InstanceType}</p>
      </ServerCardInfo>
      <ServerCardStatus>
        <span className={server.InstanceState === 'On' ? 'on' : 'off'}></span>
        <img src={ServerSVG} alt="Server" />
      </ServerCardStatus>
    </ServerCardDiv>
  ));
};

export default ServerCard;
