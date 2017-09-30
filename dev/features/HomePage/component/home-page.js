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
        const {onDisplayAdminFunctions,role} = this.props;
        return(
        
        <div style={{width:'100%',height:'100%'}}>
               <HomePageDrawer
               onDisplayAdminFunctions={onDisplayAdminFunctions}
               />
               <Header/>

        </div>

        )
    
    }
}

export default HomePage;