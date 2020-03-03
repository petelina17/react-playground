import React, {CSSProperties} from 'react';
import './SectionItem.css';

export interface SectionItemInfo {
    image: string,
    title: string
}

interface State {
    error: any
}

export default class SectionItem extends React.Component<SectionItemInfo, State> {
    constructor(props: SectionItemInfo) {
        super(props)
        this.state = {error: null}
    }

    picture: CSSProperties = {
        backgroundImage: `url(./img/${this.props.image}.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    handleClick = () => {
        try {
            if (this.props.title === 'sky') {
                throw 'ERROR !!!'
            }
        } catch (error) {
            this.setState({error: error})
        }
    }

    render() {
        if (this.state.error != null) {
            return <h1>Please come soon ...</h1>
        }

        return (
            <div className={'section'} style={this.picture}>
                <button onClick={this.handleClick}>Click me!</button>
                <div className={'title'}> {this.props.title}</div>
            </div>
        )
    }
};

