import React from 'react'
import {ServersGridSection} from './ServersGridStyles'

import ServerCard from '../ServerCards/ServerCard'

const ServersGrid = () => {
    return (
        <ServersGridSection>
            <ServerCard/>
            <ServerCard/>
            <ServerCard/>
            <ServerCard/>
            <ServerCard/>
            <ServerCard/>
            <ServerCard/>
            <ServerCard/>
        </ServersGridSection>
    )
}

export default ServersGrid