import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// import { createBrowserHistory } from 'history';
import 'babel-polyfill';
import Main from './main';
import UserHeader from '../features/userHome/components/user-list-header';
import UserList from '../features/userHome/container/user-list';
import UserDetailHeader from '../features/userDetails/components/user-detail-header';
import MainHomePage from '../features/HomePage/container/home-page';
import store from './store';

const history = syncHistoryWithStore(browserHistory, store);
export default () => {
    return(


        <Router history={history}>
            <Route path={'/'} component={Main}>
                <IndexRoute component={UserList}/>
            </Route>
            <Route path = {'/abc'} component = {MainHomePage} />
            {/* <Route path = {'/Admin'} component = {AdminContainer}/>
            <Route path = {'/Staff'} component = {StaffContainer}/>
            <Route path = {'/Tech'} component = {TechContainer}/> */}
            {/* <Route path={'/(:id)'} component={UserDetailHeader}/> */}
        </Router>
    );
};


