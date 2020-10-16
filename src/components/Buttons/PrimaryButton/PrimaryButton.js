import React from 'react'
import {PrimaryButtonTag} from './PrimaryButtonStyles'

const PrimaryButton = ({maxWidth, children}) => {
    return (
        <PrimaryButtonTag maxWidth={maxWidth}>
            {children}
        </PrimaryButtonTag>
    )
}

export default PrimaryButton