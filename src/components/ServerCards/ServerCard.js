import React, { useState, useEffect, useContext } from 'react';
import {
  ServerCardDiv,
  ServerCardInfo,
  ServerCardStatus,
} from './ServerCardStyles';
import { trackPromise } from 'react-promise-tracker'
import axios from 'axios';

import ServerSVG from '../../assets/servidores.svg';
import { SearchContext } from '../../pages/Dashboard';

const api_key = process.env.REACT_APP_API_KEY

const ServerCard = () => {
  const { searchTerm } = useContext(SearchContext);
  const [serversInfo, setServer] = useState([]);

  const url = 'https://recrutamento.alterdata.cloud/listaServidor';

  useEffect(() => {
    trackPromise(
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
      .catch((err) => console.log(err))
    )
  }, []);


  //pesquisa dos servidores

  const filteredServers = serversInfo.filter(
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
