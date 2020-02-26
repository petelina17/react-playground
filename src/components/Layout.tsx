import React, { Component } from 'react';
import Navbar from './Navbar';
import './Layout.css';
import ViewContainer from './ViewContainer'

interface Props {}
interface State {
    currentView: string
}


export default class Layout extends Component<Props, State> {

    state = {
        currentView: ''
    };

    setView = (view: string) => {
        this.setState({ currentView: view });
    }

    render() {
        return <div id={'layout'}>
            <Navbar />
            <ViewContainer currentView={this.state.currentView} onViewSelected={this.setView}/>
        </div>;
    }
}

