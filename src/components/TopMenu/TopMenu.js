import React from 'react'
import {TopMenuDiv} from './TopMenuStyles'

import Logo from '../Logo/Logo'
import TopSearch from '../TopSearch/TopSearch'
import LogoutIcon from '../../assets/icon-logout.svg'

const TopMenu = () => {
    return (
        <TopMenuDiv>
            <Logo/>
            <TopSearch/>
            <div>
                <a href="/login" alt="logout">
                    <img src={LogoutIcon} alt="logout" />
                </a>
            </div>
        </TopMenuDiv>
    )
}

export default TopMenu