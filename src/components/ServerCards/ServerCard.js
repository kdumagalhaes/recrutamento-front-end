import React, { useState, useEffect, useContext } from 'react';
import {
  ServerCardDiv,
  ServerCardInfo,
  ServerCardStatus,
} from './ServerCardStyles';

import ServerSVG from '../../assets/servidores.svg';
import axios from 'axios';
import { SearchContext } from '../../App';

const ServerCard = () => {
  const { searchTerm } = useContext(SearchContext);
  // console.log(searchTerm)
  const [servers, setServer] = useState([]);
  const url = 'https://recrutamento.alterdata.cloud/listaServidor';
  const bearer =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgxLCJpYXQiOjE2MDI2ODIyNjksImV4cCI6MzIwNTM2ODEzOH0.z4th2DLRutANTv19yNY1MQiGN1biuKMvSQWButoW3IQ';

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

  const filteredServers = servers.filter(
    (server) =>
      server.Instance.toLowerCase().includes(searchTerm.toLowerCase()) ||
      server.InstanceId.includes(searchTerm.toLowerCase())
  );

  return filteredServers.map((server) => (
    <ServerCardDiv key={server.InstanceId}>
      <ServerCardInfo>
        <span>Nome:</span>
        <p>{server.Instance}</p>
        <span>RAM:</span>
        <p>589 MB</p>
        <span>IP:</span>
        <p>{server.PublicIpAddress ? server.PublicIpAddress : 'No IP found'}</p>
        <span>Instância:</span>
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
