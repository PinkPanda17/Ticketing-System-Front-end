import React from 'react';
import AppBar from 'material-ui/AppBar';
import UserDetail from '../container/user-detail';

export default class UserDetailHeader extends React.Component{
    
    render(){        
        return(
            <div>
                <div>
                    <AppBar title="ToDo List"/>
                </div>
                <div>
                    <UserDetail/>
                </div>
            </div>
        );
    }
}