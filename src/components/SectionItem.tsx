import React, {CSSProperties} from 'react';
import './SectionItem.css';

export interface SectionItemInfo {
    image: string,
    title: string
}

export default class SectionItem extends React.Component<SectionItemInfo, {}>{
    picture: CSSProperties = {
        backgroundImage: `url(${this.props.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    render() {
        return (
            <div className={'section'} style={this.picture}>
                <div className={'title'}> {this.props.title}</div>
            </div>
        )
    }
};

