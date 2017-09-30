//React
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as duck from '../duck';
import {Link} from 'react-router';
import axios from 'axios';
//Radium
import Radium, { Style,StyleRoot } from 'radium';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

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
class HomePageDrawer extends Component{

    constructor(props){
        super(props);
        this.state={
            // userRole:''   
        }
    }
    
    render(){    
        console.log('test2');
        const {onDisplayAdminFunctions} = this.props;
        return(
        <StyleRoot>
                <Drawer open={true}>
                     {onDisplayAdminFunctions()}
                </Drawer>
        </StyleRoot>

        )
    
    }
}

export default HomePageDrawer;