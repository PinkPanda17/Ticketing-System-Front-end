//React
import React, {Component} from 'react';
//Radium
import Radium, { Style,StyleRoot } from 'radium';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const styles = {
  };
class EditTicketDialog extends Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',   
        }
    }
    onEditTicket(){
        const {onEditTicket} = this.props;
        const {assignedto,category,status,subject,tickid,description}=this.refs;
        const ticket ={
            ticketsid: tickid.input.value,
            subject: subject.input.value,
            description: description.input.value,
            status: status.input.value,
            StartDate: new Date(),
            endDate: null,
            category: category.input.value,
        }
        onEditTicket(ticket)
    }



    render(){    
        const {openAddTicketDialog,onCloseDialog,openEditTicketDialog,ticketInfo }=this.props;
        const actions = [
,            <FlatButton
                label="Close"
                onClick={onCloseDialog.bind(this)}
              />,
            <FlatButton
                label="Edit Ticket"
                primary={true}
                onClick={this.onEditTicket.bind(this)}
            />
            
            ]
        return(
        <StyleRoot>
                    <Dialog
                        title="Edit Ticket"
                        modal={false}
                        open={openEditTicketDialog}
                        actions={actions}
                        contentStyle={{width:'500px',height:'calc(100% - 70px)'}}
                    >
                    <div style={{display:'flex',flexDirection:'column',overflowY:'scroll',maxHeight:'400px'}}>
                        <TextField
                            hintText="Ticket Id"
                            disabled={true}
                            defaultValue={ticketInfo ? ticketInfo.ticketsid:''}
                            ref="tickid"
                        />
                        <div style={{minHeight:'10px'}}/>
                        <TextField
                            hintText="Assigned To"
                            floatingLabelText = "Assigned To"
                            ref="assignedto"
                            defaultValue={ticketInfo?ticketInfo.assignedto:''}

                        />
                        <div style={{minHeight:'10px'}}/>
                        <TextField
                            hintText="Subject"
                            floatingLabelText="Subject"
                            ref="subject"
                            defaultValue={ticketInfo?ticketInfo.subject:''}
                        />
                        <div style={{minHeight:'10px'}}/>
                        <TextField
                            hintText="Status"
                            floatingLabelText="Status"
                            ref="status"
                            defaultValue={ticketInfo?ticketInfo.status:''}
                        />
                        <div style={{minHeight:'10px'}}/>
                        <TextField
                            hintText="Category"
                            floatingLabelText="Category"
                            ref="category"
                            defaultValue={ticketInfo?ticketInfo.category:''}
                        />
                        <div style={{minHeight:'10px'}}/>
                        <TextField
                            hintText="Description"
                            floatingLabelText="Description"
                            ref="description"
                            defaultValue={ticketInfo?ticketInfo.description:''}
                        />
                        <div style={{minHeight:'60px'}}/>
                    </div>
                    </Dialog>
        </StyleRoot>
        )
    
    }
}

export default EditTicketDialog;