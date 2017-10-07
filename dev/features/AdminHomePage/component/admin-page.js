//React
import React, {Component} from 'react';
//Radium
import Radium, { Style,StyleRoot } from 'radium';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
  import Toggle from 'material-ui/Toggle';
  

const styles = {

    toggle:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width:'40%',
        margin:'20px 0',
    }
  };
class AdminDumbPage extends Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',   
            filterTickets: false,
        }
    }

    onDisplayTickets(){
        const {listOfTickets,onSelectTicket,selectedTicketIndex} = this.props;
        return(
            listOfTickets.map( (row, index) => (
                <TableRow 
                    key={index} 
                >
                  <TableRowColumn>{row.ticketsid}</TableRowColumn>
                  <TableRowColumn>{row.subject}</TableRowColumn>
                  <TableRowColumn>{row.status}</TableRowColumn>
                  <TableRowColumn>{row.StartDate? row.StartDate.toString() : "N/A"}</TableRowColumn>
        
                </TableRow>
                ))
        );
    }

    onDisplayUnassignedTickets(){
        const {listOfTickets,onSelectTicket,selectedTicketIndex} = this.props;
        const data=[];
        listOfTickets.map((row,i)=>{
            if(row.status=="Unassigned")
            {
                 data.push(<TableRow 
                    key={i} 
                >
                  <TableRowColumn>{row.ticketsid}</TableRowColumn>
                  <TableRowColumn>{row.subject}</TableRowColumn>
                  <TableRowColumn>{row.status}</TableRowColumn>
                  <TableRowColumn>{row.StartDate? row.StartDate.toString() : "N/A"}</TableRowColumn>
        
                </TableRow>)
            }
        })
        console.log(data);
        return data;
    }

    onToggleFilterTickets(e,value){
        console.log(value)
        const {onFilterTickets}=this.props;
        onFilterTickets(value);
    }

    render(){    
        const {onSelectTicket,filterTickets} = this.props;
        return(
        <StyleRoot style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                <Toggle
                    label="Filter Unassigned Tickets"
                    defaultToggled={false}
                    style={styles.toggle}
                    onToggle={this.onToggleFilterTickets.bind(this)}
                />

             <Table  onRowSelection={onSelectTicket.bind(this)}>
                <TableHeader>
                    <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>Subject</TableHeaderColumn>
                    <TableHeaderColumn>Status</TableHeaderColumn>
                    <TableHeaderColumn>StartDate</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filterTickets ?
                        this.onDisplayUnassignedTickets():
                        this.onDisplayTickets()
                        }
                </TableBody>
            </Table>

        </StyleRoot>
        )
    
    }
}

export default AdminDumbPage;