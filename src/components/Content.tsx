import React from 'react';
import SectionItem from './SectionItem';
import './Content.css';
import forest from '../img/forest.jpg';
import sky from '../img/sky.jpg';
import desert from '../img/desert.jpg'

export default function Content() {
    return (
        <div id={'content'}>
            <SectionItem image={forest} title={'forest'}/>
            <SectionItem image={sky} title={'sky'}/>
            <SectionItem image={desert} title={'desert'}/>
        </div>
    )
};

