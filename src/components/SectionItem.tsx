import React, {CSSProperties} from 'react';
import './SectionItem.css';

export interface SectionItemInfo {
    image: string,
    title: string,
    onClick: (id: string) => void;
}

export default function SectionItem(props: SectionItemInfo) {
    const picture: CSSProperties = {
        backgroundImage: `url(../img/${props.image}.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    const onClick = function () {
        console.log('SectionItem.click on ' + props.title)
        props.onClick(props.image)
    }

    return (
            <div className={'section'} style={picture} onClick={onClick}>
                <div className={'title'}> {props.title}</div>
            </div>
        )

};

