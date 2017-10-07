//React
import React, {Component} from 'react';
//Radium
import Radium, { Style,StyleRoot } from 'radium';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const styles = {
  };
class AddTicketDialog extends Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',   
        }
    }
    onSubmitTicket(){
        const {onSubmitTicket} = this.props;
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
        onSubmitTicket(ticket)
    }
    render(){    
        const {openAddTicketDialog,onCloseDialog}=this.props;
        const actions = [
            <FlatButton
                label="Close"
                onClick={onCloseDialog.bind(this)}
              />,
            <FlatButton
                label="Add Ticket"
                primary={true}
                onClick={this.onSubmitTicket.bind(this)}
            />
            
            ]
        return(
        <StyleRoot>
                    <Dialog
                        title="Add Ticket"
                        modal={false}
                        open={openAddTicketDialog}
                        actions={actions}
                        contentStyle={{width:'500px',height:'calc(100% - 70px)'}}
                    >
                    <div style={{display:'flex',flexDirection:'column',overflowY:'scroll',maxHeight:'400px'}}>
                        <TextField
                            hintText="Ticket Id"
                            disabled={true}
                            value={100}
                            ref="tickid"
                        />
                        <div style={{minHeight:'10px'}}/>
                        <TextField
                            hintText="Assigned To"
                            floatingLabelText = "Assigned To"
                            ref="assignedto"
                        />
                        <div style={{minHeight:'10px'}}/>
                        <TextField
                            hintText="Subject"
                            floatingLabelText="Subject"
                            ref="subject"
                        />
                        <div style={{minHeight:'10px'}}/>
                        <TextField
                            hintText="Status"
                            floatingLabelText="Status"
                            ref="status"
                        />
                        <div style={{minHeight:'10px'}}/>
                        <TextField
                            hintText="Category"
                            floatingLabelText="Category"
                            ref="category"
                        />
                        <div style={{minHeight:'10px'}}/>
                        <TextField
                            hintText="Description"
                            floatingLabelText="Description"
                            ref="description"
                        />
                        <div style={{minHeight:'60px'}}/>
                    </div>
                    </Dialog>
        </StyleRoot>
        )
    
    }
}

export default AddTicketDialog;