//React
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as duck from '../duck';
import {Link} from 'react-router';
import axios from 'axios';
//Radium
import Radium, { Style } from 'radium';

class LoginForm extends Component{

    // constructor(props){
    //     super(props);
    //     this.state={
    //         search: "",
    //         usersList: []
    //     };
    // }
    

    render(){    
        return(
           <Link to ="/abc"> <h1 >tst</h1></Link>
        )
    }
}

// function mapStateToProps(state){
//     return{
//         users: state.users
//     };
// }

// function matchDispatchToProps(dispatch){
//     return bindActionCreators(duck, dispatch)
// }

//export default connect(mapStateToProps, matchDispatchToProps)(UserList);
export default LoginForm
