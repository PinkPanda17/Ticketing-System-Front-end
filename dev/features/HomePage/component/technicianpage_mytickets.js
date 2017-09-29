//React
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as duck from '../duck';
import {Link} from 'react-router';
import axios from 'axios';
//Radium
import Radium, { Style } from 'radium';

import RaisedButton from 'material-ui/RaisedButton';


const style = {
    margin: 12,
  };
class TechnicianPageMyTickets extends Component{

    constructor(props){
        super(props);
        this.state={userRole:'Admin'}
    }
    
    render(){    
        const {test}=this.props;
        return(
        
        <div>
            <h1 onClick={test.bind(this)}> TechnicianPageMyTickets </h1>
           
        </div>

        )
    }
}

export default TechnicianPageMyTickets
