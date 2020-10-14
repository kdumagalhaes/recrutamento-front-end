import React, { useState, useEffect } from 'react';
import {
  ServerCardDiv,
  ServerCardInfo,
  ServerCardStatus,
} from './ServerCardStyles';

import ServerSVG from '../../assets/servidores.svg';

const ServerCard = () => {
  const [status, setStatus] = useState(true);
  const [servers, setServer] = useState([]);

  const url = 'https://recrutamento.alterdata.cloud/listaServidor';
  const bearer =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgxLCJpYXQiOjE2MDI2ODIyNjksImV4cCI6MzIwNTM2ODEzOH0.z4th2DLRutANTv19yNY1MQiGN1biuKMvSQWButoW3IQ';

  useEffect(() => {
    async function fetchServers() {
      const api = await (
        await fetch(url, {
          method: 'POST',
          headers: {
            Authorization: bearer,
          },
        })
      ).json();
      console.log(api);
    }
    fetchServers();
  });

  // fetch(url, {
  //   method: 'POST',
  //   headers: {
  //     'Authorization': bearer
  //   }
  // })
  // .then(res => res)
  // .then(data => console.log(data))
  // .catch(err => console.log(err))

  return (
    // servers.map(server => (
    <ServerCardDiv>
      <ServerCardInfo>
        <span>Nome:</span>
        <p>ola</p>
        <span>RAM:</span>
        <p>589 MB</p>
        <span>IP:</span>
        <p>170.80.70.161</p>
        <span>Processador:</span>
        <p>Intel XXX</p>
      </ServerCardInfo>
      <ServerCardStatus>
        <span className={status ? 'on' : 'off'}></span>
        <img src={ServerSVG} alt="Server" />
      </ServerCardStatus>
    </ServerCardDiv>
    // ))
  );
};

export default ServerCard;
