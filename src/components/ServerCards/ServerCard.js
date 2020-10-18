import React, { useState, useEffect, useContext } from 'react';
import {
  ServerCardDiv,
  ServerCardInfo,
  ServerCardStatus,
} from './ServerCardStyles';
import { trackPromise } from 'react-promise-tracker'

import ServerSVG from '../../assets/servidores.svg';
import { SearchContext } from '../../pages/Dashboard';

const api_key = process.env.REACT_APP_API_KEY

const ServerCard = () => {
  const { searchTerm } = useContext(SearchContext);
  const [servers, setServer] = useState([]);

  const url = 'https://recrutamento.alterdata.cloud/listaServidor';

  const fetchServers = async () => {
    try {
      const response = await fetch(
        url,
        {
          method: 'GET',
          headers: {
            Authorization:'Bearer ' + api_key,
          },
        }
      );

      const servers = await response.json()
      setServer(servers)
      
    } catch (err) {
      console.error(err.message)
    }
  }
  
  useEffect(() => {
    trackPromise(
      fetchServers()
    )
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
        <span>Código:</span>
        <p>{server.InstanceId}</p>
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
