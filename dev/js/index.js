import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import allReducers from './reducers';
import getApp from './app';
import Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            {getApp()}
        </MuiThemeProvider>
    </Provider> 
    , document.getElementById('root'));