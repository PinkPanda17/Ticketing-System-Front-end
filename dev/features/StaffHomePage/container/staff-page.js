//React
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as duck from '../duck';
import {Link} from 'react-router';
import axios from 'axios';
import {
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

//Radium
import Radium, { Style,StyleRoot } from 'radium';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';

//Dumb
// import HomePage from '../component/home-page';
import StaffDumbPage from '../component/staff-page';
import AddTicketDialog from '../component/add-ticket-dialog';
import EditTicketDialog from '../component/edit-ticket-dialog';

const styles = {

    actionWrapper:{
        display: 'flex',
        justifyContent:'center',
        flexDirection:'column',
    }
  };
class StaffPageCtx extends Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',   
        }
    }

    render(){    
        const {}=this.props;
        return(
        <StyleRoot>
            <div style={{marginLeft:'256px'}}>
                <h1>STAFF</h1>
                <h1>STAFF</h1>
                <h1>STAFF</h1>
                <h1>STAFF</h1>
                <h1>STAFF</h1>
                <h1>STAFF</h1>
                <h1>STAFF</h1>
                <h1>STAFF</h1>
                <h1>STAFF</h1>
            </div>
        </StyleRoot>
        )
    
    }
}
// function mapStateToProps(state) {
//     return {
//         userinfo : state.HomePageReducer
//     };
// }

// function matchDispatchToProps(dispatch) {
//     return bindActionCreators(duck, dispatch)
// }

//export default connect(mapStateToProps, matchDispatchToProps)(AdminPage);
export default StaffPageCtx;