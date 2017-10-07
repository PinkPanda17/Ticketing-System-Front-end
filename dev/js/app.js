import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// import { createBrowserHistory } from 'history';
import 'babel-polyfill';
import Main from './main';
import UserHeader from '../features/userHome/components/user-list-header';
import UserList from '../features/userHome/container/user-list';
import UserDetailHeader from '../features/userDetails/components/user-detail-header';

//Main Home Page
import MainHomePage from '../features/HomePage/container/home-page';
//MainHomePageChildrens
import AdminHomePageCtx from '../features/AdminHomePage/container/admin-page';
import TechnicianHomePageCtx from '../features/technician_home_page/container/technician-page';
import StaffHomePageCtx from '../features/StaffHomePage/container/staff-page';
import TechPageCtx from '../features/AdminHomePage/container/mytech-page';
import MyReportPageCtx from '../features/AdminHomePage/container/myreport-page';


import store from './store';

const history = syncHistoryWithStore(browserHistory, store);
export default () => {
    return(


        <Router history={history}>
            <Route path={'/'} component={MainHomePage}>
                <IndexRoute component={AdminHomePageCtx}/>
                <IndexRoute component={TechnicianHomePageCtx}/>
                <IndexRoute component={StaffHomePageCtx}/>
            </Route>
            <Route path={'/technician'} component={TechPageCtx}/>
            <Route path={'/myreport'} component={MyReportPageCtx}/>
            

            {/* <Route path = {'/Admin'} component = {AdminContainer}/>
            <Route path = {'/Staff'} component = {StaffContainer}/>
            <Route path = {'/Tech'} component = {TechContainer}/> */}
            {/* <Route path={'/(:id)'} component={UserDetailHeader}/> */}
        </Router>
    );
};


