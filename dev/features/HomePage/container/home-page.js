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
import HomePage from '../component/home-page';

//icon
import AddIcon from 'material-ui/svg-icons/content/add-circle'
import RemoveIcon from 'material-ui/svg-icons/content/remove-circle'



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
            germi: '',
            openAddTicketDialog: false,
            openEditTicketDialog: false,
        }
    }
    componentWillMount(){
        this.props.onLoad();
    }

    openAddTicketDialog(){
        this.setState({
            openAddTicketDialog:true
        })
    }

    onCloseAddTicketDialog(){
        this.setState({
            openAddTicketDialog:false,
            openEditTicketDialog:false
        })
    }
    onDisplayAdminFunctions(role){

        switch(role)
        {
            case 'Admin':
            return(
                <div>
                    <div style={{minHeight:'65px'}}/>
                    <hr/>
                    <MenuItem rightIcon={<AddIcon/>} onClick={this.openAddTicketDialog.bind(this)}>Add Ticket</MenuItem>
                    
                </div>
            );
            case 'Staff':
            return(
                <div>
                    <MenuItem>Action 1</MenuItem>
                </div>
            );
            default:
            case 'Staff':
            return(
                <div>
                    <MenuItem>Action 1</MenuItem>
                </div>
            );
        }
       
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

    openEditTicketDialog(){
        this.setState({
            openEditTicketDialog: true,
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
            <HomePage
                onDisplayAdminFunctions={this.onDisplayAdminFunctions.bind(this)}
                role={userinfo.role}
                onLogOut = {this.onLogOut.bind(this)}
                openAddTicketDialog={this.state.openAddTicketDialog}
                openEditTicketDialog={this.state.openEditTicketDialog}
                onCloseDialog={this.onCloseAddTicketDialog.bind(this)}
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