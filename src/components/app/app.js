import React from 'react';
import {Route, Switch} from 'react-router-dom';

import MainPage from '../../components/pages/mainPage';
import ProductPage from '../../components/pages/productPage'

export default function App() {
    return (
        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route path='/:id' render={props => <ProductPage {...props}/>}/>
        </Switch>
    )
};

