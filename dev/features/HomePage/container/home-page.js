//React
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as duck from '../duck';
import {Link} from 'react-router';
import axios from 'axios';
//Radium
import Radium, { Style } from 'radium';

import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import AdminPage from '../component/adminpage';
import TechPage from '../component/technicianpage';
import StaffPage from '../component/staffpage';

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
class LoginForm extends Component{

    constructor(props){
        super(props);
        this.state={
            userRole:''
        
        }
    }
    AdminClick(){
        this.setState({userRole:'Admin'})
    }
    StaffClick(){
        this.setState({userRole:'Staff'})
    }
    TechClick(){
        this.setState({userRole:'Tech'})
    }

    test(){
        this.setState({ShowHeader:!this.state.ShowHeader});
    }
  



    onSelectPage(){
        switch(this.state.userRole)
        {
            case 'Staff': return <StaffPage/>
            case 'Tech' : return <TechPage 
            test={this.test.bind(this)}
            ShowHeader={this.state.ShowHeader}
            />
            case 'Admin' : return <AdminPage/>
            default: null
        }
    }
    render(){    
        return(
        
        <div>
            <div style={style.buttonWrapper}>
                
            </div>
            <div style = {style.divmargin} >

                {this.onSelectPage()}</div>
                <Drawer open={true}>

                    <RaisedButton onClick={this.AdminClick.bind(this)} label="For Admin"  style={style.buttonStyle} />  
                    <RaisedButton onClick={this.StaffClick.bind(this)} label="For Staff" style={style.buttonStyle} />
                    <RaisedButton onClick={this.TechClick.bind(this)} label="For Technician" style={style.buttonStyle} />
                </Drawer>

        </div>

        )
    
    }
}
export default LoginForm
