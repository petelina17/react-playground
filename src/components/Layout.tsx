import React, {lazy} from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Content from './Content';
import './Layout.css';
// import DetailView from './DetailView'

const DetailView = lazy(() => import(/* webpackChunkName: "DetailView" */ './DetailView'))

export default class Layout extends React.Component {
    render() {
        return (
            <div id={'layout'}>
                <Navbar/>
                <Switch>
                    <Route path="/forest">
                        <DetailView id="forest"/>
                    </Route>
                    <Route path="/sky">
                        <DetailView id="sky"/>
                    </Route>
                    <Route path="/desert">
                        <DetailView id="desert"/>
                    </Route>
                    <Route path="/">
                        <Content/>
                    </Route>

                </Switch>
            </div>
        );
    }
}

