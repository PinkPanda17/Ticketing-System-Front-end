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

class AdminPage extends Component{

    constructor(props){
        super(props);
        this.state={userRole:'Admin'}
    }
    
    render(){    
        console.log(this.state.userRole);
        return(
        
        <div>
            <h1> AdminPage </h1>
        </div>

        )
    }
}

export default AdminPage
