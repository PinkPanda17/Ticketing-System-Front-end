import React from 'react';
import AppBar from 'material-ui/AppBar';
import UserList from '../container/user-list';

export default class UserHeader extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        output: "Ram Jon Snow"
    }

    }
    render(){
        return(
            <div>
                <AppBar title="All Users"/>
            </div>
        );
    }
}


