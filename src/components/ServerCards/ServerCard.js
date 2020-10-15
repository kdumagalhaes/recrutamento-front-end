import React, { useState, useEffect, useContext } from 'react';
import {
  ServerCardDiv,
  ServerCardInfo,
  ServerCardStatus,
} from './ServerCardStyles';

import ServerSVG from '../../assets/servidores.svg';
import axios from 'axios';
import { SearchContext } from '../../App';

const api_key = process.env.REACT_APP_API_KEY

const ServerCard = () => {
  const { searchTerm } = useContext(SearchContext);
  const [servers, setServer] = useState([]);
  const url = 'https://recrutamento.alterdata.cloud/listaServidor';
  
  useEffect(() => {
    axios
      .get(url, {
        method: 'POST',
        headers: {
          Authorization: api_key,
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
