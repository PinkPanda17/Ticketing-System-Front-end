//React
import React, {Component} from 'react';
//Radium
import Radium, { Style,StyleRoot } from 'radium';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  };
class AddTicketDialog extends Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',   
            dropDownValue: null
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
    handleChangedd(e,key,value){
        this.setState({dropDownValue:value})
    }

    handleChangedds(e,key,value){
        this.setState({dropDownValueStat:value}) 
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
                        
                        <DropDownMenu 
                        hintText="Status"
                        value={this.state.dropDownValueStat} 
                        style={{width:'70%',paddingLeft:'-10px'}}
                        onChange={this.handleChangedds.bind(this)}                       >  
                        <MenuItem value={1} primaryText="New" />
                        <MenuItem value={2} primaryText="In Process" />
                        <MenuItem value={3} primaryText="Pending for Customer" />
                        <MenuItem value={4} primaryText="Resolved" />
                        </DropDownMenu>

                        <div style={{minHeight:'10px'}}/>
                        

                        <DropDownMenu 
                        hintText="Category"
                        value={this.state.dropDownValue} 
                        style={{width:'70%',paddingLeft:'-10px'}}
                        onChange={this.handleChangedd.bind(this)}>
                        <MenuItem value={1} primaryText="Hardware" />
                        <MenuItem value={2} primaryText="Software" />
                        <MenuItem value={3} primaryText="Network" />
                        </DropDownMenu>

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