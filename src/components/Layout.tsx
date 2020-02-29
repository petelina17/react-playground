import React, { Component } from 'react';
import Navbar from './Navbar';
import './Layout.css';
import Content from './Content'
import DetailView from './DetailView'


interface Props {}
interface State {
    currentView: string
}


export default class Layout extends Component<Props, State> {
    detailViews = ['forest', 'sky', 'desert'];

    state = {
        currentView: ''
    };

    setView = (view: string) => {
        console.log('Layout.setView: ' + view)
        this.setState({ currentView: view });
    }

    goHome = () => {
        this.setState({currentView: ''})
    }


    render() {
        let fullView
        if (this.state.currentView === '') {
           fullView =  <Content detailViews={this.detailViews} onDetaleViewSelected={this.setView}/>
        } else {
           // here the param from from DetailView
           fullView = <DetailView id={this.state.currentView} />
        }

        return <div id={'layout'}>
            <Navbar onHeaderClick={this.goHome} />
            {fullView}
        </div>;
    }
}

