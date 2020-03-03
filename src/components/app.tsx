import React, {lazy, Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import './app.css';
// import Layout from './Layout';
import Spinner from './Spinner'

const Layout = lazy(() => import(/* webpackChunkName: "Layout" */ './Layout'))

export default function App() {

    return (
        // <Spinner />

        <Suspense fallback={<Spinner/>}>
            <BrowserRouter>
                <Layout/>
            </BrowserRouter>
        </Suspense>

    )
}

