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
    onUpdateTech(){
        const {onUpdateTech} = this.props;
        const {userid,eadd,name,country,role,adminid}=this.refs;
        const technician ={
            User2Id: userid.input.value,
            EmailAdd: eadd.input.value,
            Name: name.input.value,
            Country: country.input.value,
            Role: role.input.value,
            AdminId: adminid.input.value
        }
        onUpdateTech(technician)
    }
    

    handleChangeRole(e,key,value){
        this.setState({dropDownValueRole:value}) 
    }

    render(){    
        const {openAddTicketDialog,onCloseDialog,openEditTicketDialog,ticketInfo }=this.props;
        const actions = [
,            <FlatButton
                label="Close"
                onClick={onCloseDialog.bind(this)}
              />,
            <FlatButton
                label="Edit Technician"
                primary={true}
                onClick={this.onEditTicket.bind(this)}
            />
            
            ]
        return(
        <StyleRoot>
                    <Dialog
                        title="Update Technician"
                        modal={false}
                        open={openAddTicketDialog}
                        actions={actions}
                        contentStyle={{width:'500px',height:'calc(100% - 70px)'}}
                    >
                    <div style={{display:'flex',flexDirection:'column',overflowY:'scroll',maxHeight:'400px'}}>
                    <TextField
                        hintText="User Id"
                        disabled={true}
                        value={100}
                        ref="userid"
                    />
                    <div style={{minHeight:'10px'}}/>
                    <TextField
                        hintText="Name"
                        disabled={true}
                        floatingLabelText="Name"
                        ref="name"
                    />
                    <div style={{minHeight:'10px'}}/>
                    <TextField
                        hintText="Email Address"
                        disabled={true}
                        floatingLabelText = "Email Address"
                        ref="eadd"
                    />
                    <div style={{minHeight:'10px'}}/>
                    <TextField
                        hintText="Country"
                        disabled={true}
                        floatingLabelText = "Country"
                        ref="country"
                    />
                    <div style={{minHeight:'10px'}}/>
                    
                    <DropDownMenu 
                    value={this.state.dropDownValueRole} 
                    style={{width:'70%',paddingLeft:'-10px'}}
                    onChange={this.handleChangeRole.bind(this)}                       >  
                    <MenuItem value={1} primaryText="Admin" />
                    <MenuItem value={2} primaryText="Technician" />
                    <MenuItem value={3} primaryText="Staff" />
                    </DropDownMenu>


                    <div style={{minHeight:'10px'}}/>
                    <TextField
                        hintText="Admin Id"
                        floatingLabelText="Admin Id"
                        ref="adminid"
                    />
                    <div style={{minHeight:'60px'}}/>
                </div>
                </Dialog>
        </StyleRoot>
        )
    
    }
}

export default UpdateTechDialog;