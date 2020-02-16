import React from 'react';
import Navbar from './Navbar';
import Content from './Content';
import './Layout.css';

export default class Layout extends React.Component {
    render() {
        return <div id={'layout'}>
            <Navbar />
            <Content />
        </div>;
    }
}

