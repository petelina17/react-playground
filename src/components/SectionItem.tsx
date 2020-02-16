import React from 'react';
import './SectionItem.css';

export interface SectionItemInfo {
    image: string,
    title: string
}

export default class SectionItem extends React.Component<SectionItemInfo, {}>{
    render() {
        return (
            <div className={'section'}>{this.props.title}</div>
        )
    }
};
