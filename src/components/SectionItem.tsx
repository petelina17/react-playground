import React from 'react';

export interface SectionItemInfo {
    image: string,
    title: string
}

export default class SectionItem extends React.Component<SectionItemInfo, {}>{
    render() {
        return (
            <div>{this.props.title}</div>
        )
    }
};
