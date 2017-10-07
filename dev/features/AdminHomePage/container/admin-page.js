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



import MenuItem from 'material-ui/MenuItem';
import ticketData from '../ticketData';
//Dumb
 import AdminDumbPage from '../component/admin-page';
 import AddTicketDialog from '../component/add-ticket-dialog';
 import EditTicketDialog from '../component/edit-ticket-dialog';

const styles = {

    actionWrapper:{
        display: 'flex',
        justifyContent:'center',
        flexDirection:'column',
    }
  };
class AdminPage extends Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',  
            openEditTicketDialog: false, 
            filterTickets: false,
        }
    }

componentWillMount(){
    const {getTickets} = this.props;
    getTickets();
}

onSelectTicket(index){
    const {ticketInfo}=this.props;
    const selectedTicket = ticketInfo.ticketList[index];
        this.setState({
            selectedTicket:selectedTicket,
            selectedTicketIndex: index,
            openEditTicketDialog: true,
        })
}

onCloseEditTicketDialog(){
    this.setState({
        openEditTicketDialog: false,
    })
}

onFilterTickets(value){
    this.setState({
        filterTickets: value
    })
    const {filterTickets,ticketInfo}=this.props;
    filterTickets(value,ticketInfo.ticketList);
}


    render(){    
        const {ticketInfo,openAddTicketDialog,onCloseDialog,onSubmitTicket,onEditTicket}=this.props;
        return(
        <StyleRoot>
            <div style={{marginLeft:'256px'}}>
               <AdminDumbPage
               listOfTickets={ticketInfo.ticketList}
               onSelectTicket={this.onSelectTicket.bind(this)}
               selectedTicketIndex={this.state.selectedTicketIndex}
               onFilterTickets={this.onFilterTickets.bind(this)}
               filterTickets ={ this.state.filterTickets}
               />
               <AddTicketDialog 
               openAddTicketDialog={openAddTicketDialog}
               ticketInfo={ticketInfo}
               onCloseDialog={onCloseDialog}
               onSubmitTicket={onSubmitTicket}
               />
               <EditTicketDialog 
               openEditTicketDialog={this.state.openEditTicketDialog}
               ticketInfo={this.state.selectedTicket}
               onCloseDialog={this.onCloseEditTicketDialog.bind(this)}
               onEditTicket={onEditTicket}
               />
               
            </div>
        </StyleRoot>
        )
    
    }
}

function mapStateToProps(state) {
    return {
        ticketInfo : state.AdminPageReducer
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(duck, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(AdminPage);