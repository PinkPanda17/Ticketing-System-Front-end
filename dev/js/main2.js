import React from 'react';

export default class Main2 extends React.Component{
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}