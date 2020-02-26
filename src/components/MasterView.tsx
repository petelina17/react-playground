import React from 'react';
import SectionItem from './SectionItem'
import './Content.css'

interface Props {
    detailViews: string[]
    onDetaleViewSelected: (view: string) => void;
}

export default function MasterView(props: Props) {
    return(
        <div id="content">
        {
            props.detailViews.map((item: string) =>
                <SectionItem image={item} title={item} onClick={props.onDetaleViewSelected} />)
        }
        </div>
    )
}