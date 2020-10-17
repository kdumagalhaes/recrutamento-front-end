import React from 'react';
import { LogoutIconBtn } from './LogoutIconStyles';

import LogoutSVG from '../../assets/icon-logout.svg'
import {toast} from 'react-toastify'

const LogoutIcon = ({setAuth}) => {

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Até mais! Logout com sucesso!");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <LogoutIconBtn onClick={e => logout(e)}>
        <img src={LogoutSVG} alt="logout" />
    </LogoutIconBtn>
  );
};

export default LogoutIcon;
