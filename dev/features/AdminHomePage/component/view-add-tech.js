//React
import React, {Component} from 'react';
//Radium
import Radium, { Style,StyleRoot } from 'radium';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  };
class AddTechDialog extends Component{

    constructor(props){
        super(props);
        this.state={
            addTech:false,
            username:'',
            password:'',   
            dropDownValueRole: 1
        }
    }
    onSubmitNewTech(){
        const {onSubmitNewTech} = this.props;
        const {userid,eadd,name,country,role,adminid}=this.refs;
        const technician ={
            User2Id: userid.input.value,
            EmailAdd: eadd.input.value,
            Name: name.input.value,
            Country: country.input.value,
            Role: role.input.value,
            AdminId: adminid.input.value
        }
        onSubmitNewTech(technician)
    }
    

    handleChangeRole(e,key,value){
        this.setState({dropDownValueRole:value}) 
    }

    render(){    
        const {openAddTicketDialog,onCloseDialog}=this.props;

        return(
        <StyleRoot>
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
                            floatingLabelText="Name"
                            ref="name"
                        />
                        <div style={{minHeight:'10px'}}/>
                        <TextField
                            hintText="Email Address"
                            floatingLabelText = "Email Address"
                            ref="eadd"
                        />
                        <div style={{minHeight:'10px'}}/>
                        <TextField
                            hintText="Country"
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
        </StyleRoot>
        )
    
    }
}

export default AddTechDialog;