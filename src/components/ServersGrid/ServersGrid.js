import React from 'react'
import {ServersGridSection} from './ServersGridStyles'

import ServerCard from '../ServerCards/ServerCard'

const ServersGrid = () => {
    return (
        <ServersGridSection>
            <ServerCard/>
        </ServersGridSection>
    )
}

export default ServersGrid