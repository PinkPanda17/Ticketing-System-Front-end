import React from 'react';
import HomePageCtx from '../features/HomePage/container/home-page';

export default class Main extends React.Component{
    render(){
        return(
            <div>
                <div>
                   <HomePageCtx/>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}