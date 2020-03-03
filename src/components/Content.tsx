import React, {CSSProperties} from 'react';
import SectionItem from './SectionItem';
import './Content.css';
import {Link} from 'react-router-dom'

export default function Content() {
    return (
        <div id={'content'}>
            <Link to="/forest" style={link}>

                <SectionItem image={'forest'} title={'forest'}/>
            </Link>
            <Link to="/sky" style={link}>
                <SectionItem image={'sky'} title={'sky'}/>
            </Link>
            <Link to="/desert" style={link}>
                <SectionItem image={'desert'} title={'desert'}/>
            </Link>
        </div>
    )
};

const link: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    fontSize: '3rem',
    marginTop: '10px'
}