import React from 'react';
export default class Props2 extends React.Component
{
    render(){
        return(
            <div>
                <h1>{this.props.text.pname}</h1>
            </div>
        )
    }
}