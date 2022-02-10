import React from 'react';
export default class Stateex extends React.Component
{
    constructor()
    {
        super();
        this.state={
            uname : 'Harry Potter',
            email : 'harry@hotmail.com',
            count : 0
        }
        
    }
    editState(){
        this.setState({
            uname: 'Prasanna Bhagwat',
            email: 'bhagwat@bestpeers.com',
            count : this.state.count+1

        })
    }
    render(){
        return(
            <div>
                <h1>Name = {this.state.uname}</h1>
                <h1>Email = {this.state.email}</h1>
                <h1>count = {this.state.count}</h1>
                <button onClick={()=>{this.editState()}}>..Edit..</button>
            </div>
        )
    }
}