//React
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as duck from '../duck';
import {Link} from 'react-router';
import axios from 'axios';
//import UserHeader from '../components/user-list-header.js';
//Material UI
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import AppBar from 'material-ui/AppBar';
import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';
//Radium
import Radium, { Style } from 'radium';


class UserList extends Component{

    constructor(){
        super();
        this.state={
            search: "",
            usersList: []
        };
    }

    componentWillMount(){
        const {getMyUser} = this.props;
        getMyUser();
    }

    updateSearch(event){
        this.setState({
            search: event.target.value.substr(0,20)
        });
    }

    clickUser(){
        window.location.reload();
    }

    createListItem(){
        let filteredSearch = this.props.users.filter(
            (user) => {
                return user.Name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        const styles = {
            header: {
                color: '#999',
                ':hover':{
                    color:'#03A9F4'
                },
                ':focus':{
                    color:'#3F51B5'
                },
                ':active':{
                    color:'#00B8D4'
                }
            }
        };
        return filteredSearch.map((user,index)=>{
            return (
                
                <Link to={"/" + user.UserId} key={user.UserId}
                        style={[styles.header]}
                >
                    <ListItem 
                        onClick={() => this.props.getMyUserId(user.UserId)}
                        leftAvatar={
                        <Avatar src={user.Image}/>
                        }>
                        {user.Name}
                    </ListItem>
                </Link>
            );
        });
    }

    render(){        
        let filteredSearch = this.props.users.filter(
            (user) => {
                return user.Name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        const bgColor = {
            backgroundColor: "#B2DFDB231231"
        }
        console.log(this.props.output);
        return(
            <div style={bgColor}>
                
                <TextField
                    onChange={this.updateSearch.bind(this)} 
                    hintText="Search for users"
                    floatingLabelText="Search for users"
                    multiLine={true}
                />
                <h5>Displaying {filteredSearch.length} user(s)</h5>
                <List>
                    {this.createListItem()}
                </List>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        users: state.users
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(duck, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
