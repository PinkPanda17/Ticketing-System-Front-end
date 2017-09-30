//React
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as duck from '../duck';
import {Link} from 'react-router';
import axios from 'axios';
import Divider from 'material-ui/divider';
//Radium
import Radium, { Style } from 'radium';

const styles = {
    headerWrapper: {
        width: 'calc(100% - 256px)',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'65px',
        marginLeft:'256px',
        flexDirection:'column',

    }

   
  };
class Header extends Component{

    constructor(props){
        super(props);
        this.state={
            // userRole:''   
        }
    }
    
    render(){    
        const {onDisplayAdminFunctions,role} = this.props;
        return(
        
        <div style={styles.headerWrapper}>
            <h2>test</h2>
            <hr style={{width:'100%',height:'150px'}}/>
        </div>

        )
    
    }
}

export default Header;