import React from 'react'
import {TopMenuDiv} from './TopMenuStyles'

import Logo from '../Logo/Logo'
import TopSearch from '../TopSearch/TopSearch'

const TopMenu = () => {
    return (
        <TopMenuDiv>
            <Logo/>
            <TopSearch/>
        </TopMenuDiv>
    )
}

export default TopMenu