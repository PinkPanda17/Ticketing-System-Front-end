//React
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as duck from '../duck';
import {Link} from 'react-router';
import axios from 'axios';
//Radium
import Radium, { Style } from 'radium';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import HomePageDrawer from './home-page-drawer' ;
import Header from './header';

//SMART
import AdminPageCtx from '../../AdminHomePage/container/admin-page';
import StaffPageCtx from '../../StaffHomePage/container/staff-page';
import TechnicianPageCtx from '../../technician_home_page/container/technician-page'

const style = {
    buttonStyle:{margin: 12},

    buttonWrapper:{
        display:'flex',
        flexDirection:'column'
    },
    divmargin: {
        marginLeft: "256px"
    }
  };
class HomePage extends Component{

    constructor(props){
        super(props);
        this.state={
            // userRole:''   
        }
    }
    
    render(){    
        const {onDisplayAdminFunctions,role,onLogOut,ticketData,openAddTicketDialog,onCloseDialog,openEditTicketDialog} = this.props;
        return(
        
        <div style={{width:'100%',height:'100%'}}>
               <HomePageDrawer
               onDisplayAdminFunctions={onDisplayAdminFunctions}
               role={role}
               onLogOut={onLogOut}
               />
               <Header role={role}/>
            {role == 'Admin' ?
            <AdminPageCtx
            ticketData={ticketData}
            openAddTicketDialog={openAddTicketDialog}   
            onCloseDialog={onCloseDialog}
            openEditTicketDialog={openEditTicketDialog}
            /> : null}
            {role == 'Staff' ?
            <StaffPageCtx/> : null}
            {role == 'Technician' ?
            <TechnicianPageCtx/> : null}

        </div>

        )
    
    }
}

export default HomePage;