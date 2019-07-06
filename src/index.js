import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import App from './components/app';
import {BrowserRouter} from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
