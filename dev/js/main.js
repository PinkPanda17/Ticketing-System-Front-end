import React from 'react';
import UserHeader from '../features/userHome/components/user-list-header';
import UserList from '../features/userHome/container/user-list';
import LoginForm from '../features/login/container/login-form';

export default class Main extends React.Component{
    render(){
        return(
            <div>
                <div>
                   <LoginForm/>
                </div>
                {/* <div>
                    {this.props.children}
                </div> */}
            </div>
        );
    }
}