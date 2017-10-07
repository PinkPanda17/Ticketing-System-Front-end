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

const styles = {
  };
class StaffDumbPage extends Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',   
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


    render(){    
        const {onSelectTicket} = this.props;
        return(
        <StyleRoot>
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
                    {this.onDisplayTickets()}
                </TableBody>
            </Table>

        </StyleRoot>
        )
    
    }
}

export default StaffDumbPage;