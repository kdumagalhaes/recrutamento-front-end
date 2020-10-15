import React from 'react'
import {TopMenuDiv} from './TopMenuStyles'

import Logo from '../Logo/Logo'
import TopSearch from '../TopSearch/TopSearch'

const TopMenu = ({searchTerm, setSearchTerm}) => {
    return (
        <TopMenuDiv>
            <Logo/>
            <TopSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </TopMenuDiv>
    )
}

export default TopMenu