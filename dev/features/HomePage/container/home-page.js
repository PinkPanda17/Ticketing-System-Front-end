//React
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as duck from '../duck';
import {Link} from 'react-router';
import axios from 'axios';
//Radium
import Radium, { Style,StyleRoot } from 'radium';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';

//Dumb
import HomePageDrawer from '../component/home-page-drawer';

const styles = {

    actionWrapper:{
        display: 'flex',
        justifyContent:'center',
        flexDirection:'column',
    }
  };
class HomePageCtx extends Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',   
        }
    }
    componentWillMount(){
        this.props.onLoad();
    }

    onDisplayAdminFunctions(){
        return(
            <div>
                <MenuItem>Action 1</MenuItem>
                <MenuItem
                onClick={this.onLogOut.bind(this)}
                >LOG OUT BITCHES</MenuItem>
            </div>
        )
    }

    onLogOut(){
        const {logoutUser}=this.props;
        logoutUser();
    }

    onClear(){
        this.setState({
            username:'',
            password:'',
        })
    }
    onLogin(){
       const {loginUser}=this.props;
       const credential = {
           username: this.state.username,
           password: this.state.password,
       }
       loginUser(credential);
    }

    onChangeUser(e,value){
        this.setState({
            username: value
        })
    }
    onChangePassword(e,value){
        this.setState({
            password: value
        })
    }

    render(){    
        const {clearLocalStorage,onSetRole,userinfo}=this.props;
        const action = [
                  <FlatButton
                    label="Login"
                    primary={true}
                    onClick={this.onLogin.bind(this)}
                />,
                <FlatButton
                    label="Clear"
                    onClick={this.onClear.bind(this)}
                />
        ]
        return(
        <StyleRoot>
        <div style={{height:'100%',width:'100%'}}>
            
        {userinfo.validated ?
            <HomePageDrawer
                onDisplayAdminFunctions={this.onDisplayAdminFunctions.bind(this)}
                /> : 
                <Dialog
                title="Login Form"
                modal={false}
                actions = {action}
                open={true}
                contentStyle={{width:'20%'}}
                onRequestClose={this.handleClose}
                >
                    <div style ={styles.actionWrapper}>
                        <TextField
                            hintText="Username"
                            onChange={this.onChangeUser.bind(this)}
                            />

                        <div style = {{minHeight:'30px'}}/>

                        <TextField
                            hintText="Password"
                            onChange={this.onChangePassword.bind(this)}
                        />
                        
                    </div>
            </Dialog>
        }

        </div>
        </StyleRoot>
        )
    
    }
}
function mapStateToProps(state) {
    return {
        userinfo : state.HomePageReducer
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(duck, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(HomePageCtx);