//React
import React, {Component} from 'react';
//Radium
import Radium, { Style,StyleRoot } from 'radium';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
 import AddTechDialog from './view-add-tech';

 import Dialog from 'material-ui/Dialog';

const styles = {

   headerstyle:{
       fontSize:'25px',
       paddingLeft:'20px'
   }  ,

   buttonstyle:{
    margin:'12px'
    }  

  };
class MyTechPage extends Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',   
            addTech:false
        }
    }
    
    addTech(){

        this.setState({addTech:true})
    }

    onCloseAddTech(){
        this.setState({
            addTech: false,
        })
    }



    render(){    
        const {onSelectTicket} = this.props;
        const actions = [
            <FlatButton
                label="Close"
                onClick={this.onCloseAddTech.bind(this)}
              />,
            <FlatButton
                label="Add Technician"
                primary={true}
               // onClick={this.onSubmitNewTech.bind(this)}
            />
            
            ]
        return(
        <StyleRoot>
             <Dialog
                        title="Add Technician"
                        modal={false}
                        open={this.state.addTech}
                        actions={actions}
                        contentStyle={{width:'500px',height:'calc(100% - 70px)'}}
                    >
                    <AddTechDialog/>
                </Dialog>
                <hr/>
                <h style={styles.headerstyle}> My Technician </h>
                <hr/>
                <RaisedButton 
                    label="Add Technician"
                    primary={true}
                    style={styles.buttonstyle}
                    onClick={this.addTech.bind(this)}
                />
                <RaisedButton 
                    label="Update Technician"
                    primary={true}
                    style={styles.buttonstyle}
                  //  onClick={this.onLogin.bind(this)}
                />

             
                <TableHeader>
                    <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Country</TableHeaderColumn>
                    <TableHeaderColumn>Email Address</TableHeaderColumn>
                    <TableHeaderColumn>Role</TableHeaderColumn>
                    <TableHeaderColumn>Admin</TableHeaderColumn>
                    </TableRow>
                </TableHeader>


                <Link to={"/"} style={{textDecoration:'none'}}>
                <RaisedButton 
                    label="Back"
                    primary={true}
                    style={styles.buttonstyle}
                  //  onClick={this.onLogin.bind(this)}
                />
                </Link>

        </StyleRoot>
        )
    
    }

    
}

export default MyTechPage;