import React, { CSSProperties } from 'react';
import { PropagateLoader } from 'react-spinners';
import { centeredContent, fullScreen} from '../css'

export default function () {
    return (
        <div style={intro}>
            <PropagateLoader color="blue" size="500"/>
        </div>
    )
}

const intro = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
}