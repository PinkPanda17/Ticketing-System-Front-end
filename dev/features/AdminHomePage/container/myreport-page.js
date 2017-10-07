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
  import MyReportPage from '../component/report-page';
 // import AddTechDialog from '../component/view-add-tech';
//  import UpdateTechDialog from '../component/update-tech';

const styles = {

    actionWrapper:{
        display: 'flex',
        justifyContent:'center',
        flexDirection:'column',
    }
  };
class MyReportPageCtx extends Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',  
            openEditTicketDialog: false, 
        }
    }

// componentWillMount(){
//     const {getTickets} = this.props;
//     getTickets();
// }

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
    render(){    
        //const {ticketInfo,openAddTicketDialog,onCloseDialog,onSubmitTicket,onEditTicket}=this.props;
        return(
        <StyleRoot>
            { /*<div style={{marginLeft:'256px'}}>
               <MyTechPage
               listOfTickets={ticketInfo.ticketList}
               onSelectTicket={this.onSelectTicket.bind(this)}
               selectedTicketIndex={this.state.selectedTicketIndex}
               />
               <AddTechDialog 
               openAddTicketDialog={openAddTicketDialog}
               ticketInfo={ticketInfo}
               onCloseDialog={onCloseDialog}
               onSubmitTicket={onSubmitTicket}
               />
               <UpdateTechDialog 
               openEditTicketDialog={this.state.openEditTicketDialog}
               ticketInfo={this.state.selectedTicket}
               onCloseDialog={this.onCloseEditTicketDialog.bind(this)}
               onEditTicket={onEditTicket}
               />
            </div> */}
            <MyReportPage/>
        </StyleRoot>
        )
    
    }
}

// function mapStateToProps(state) {
//     return {
//         ticketInfo : state.MyTechPageCtxReducer
//     };
// }

// function matchDispatchToProps(dispatch) {
//     return bindActionCreators(duck, dispatch)
// }

//export default connect(mapStateToProps, matchDispatchToProps)(MyTechPageCtx);
export default MyReportPageCtx;