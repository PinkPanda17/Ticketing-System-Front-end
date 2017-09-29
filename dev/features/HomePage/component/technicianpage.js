//React
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as duck from '../duck';
import {Link} from 'react-router';
import axios from 'axios';
//Radium
import Radium, { Style } from 'radium';

import TechnicianPageMyTickets from './technicianpage_mytickets';

import RaisedButton from 'material-ui/RaisedButton';


const style = {
    margin: 12,
  };
class TechnicianPage extends Component{

    constructor(props){
        super(props);
        this.state={
            userRole:'Admin',
            ShowHeader: false,
        }
    }
    render(){    
        const {test,ShowHeader}=this.props
        return(
        
        <div>
            <h1> TechnicianPage </h1>
           <TechnicianPageMyTickets
           test={test.bind(this)}
           />
           {ShowHeader ? <h1>DI IIPPAPAKITA TO</h1>:null}
        </div>

        )
    }
}

export default TechnicianPage
