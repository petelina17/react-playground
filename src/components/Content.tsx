import React from 'react';
import SectionItem from './SectionItem';
import './Content.css'

export default function Content() {
    return (
        <div id={'content'}>
            <SectionItem image={''} title={'forest'}/>
            <SectionItem image={''} title={'sky'}/>
            <SectionItem image={''} title={'desert'}/>
        </div>
    )
};

