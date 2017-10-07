//React
import React, {Component} from 'react';
//Radium
import Radium, { Style,StyleRoot } from 'radium';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';


const styles = {

   headerstyle:{
       fontSize:'25px',
       paddingLeft:'20px'
   }  ,

   buttonstyle:{
    margin:'12px'
    }  

  };
class MyReportPage extends Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',   
        }
    }
    
  


    render(){    
        const {onSelectTicket} = this.props;
        return(
        <StyleRoot>
                <hr/>
                <h style={styles.headerstyle}> My Reports </h>
                <hr/>
              
                <FlatButton  
                    label="Count of Resolved Tickets per Technician"
                    primary={true}
                    style={styles.buttonstyle}
                  //  onClick={this.onLogin.bind(this)}
                />
                <br/>
                <FlatButton  
                    label="Total Number of Tickets per Country"
                    primary={true}
                    style={styles.buttonstyle}
                  //  onClick={this.onLogin.bind(this)}
                />
                <br/>
                <FlatButton  
                    label="Resolution Days of Ticket"
                    primary={true}
                    style={styles.buttonstyle}
                  //  onClick={this.onLogin.bind(this)}
                />
                <br/>

             
           
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

export default MyReportPage;