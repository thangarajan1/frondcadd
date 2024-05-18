import React from 'react';
import { Component } from 'react';

class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [{
            fname:"Cadd",
            lname:"Expert"
        }]
    }
}
render() {
    return(
        <>
        {/* <h1>State initilized with true condition</h1>
        {this.state.displayBio?
        
        <button onClick={this.toggleBio}>SignUP</button>:
        <button onClick={this.toggleBio}>Login</button> */}
        <Sample1/>
        <Sample2/><br/>
      
{this.props.lname}

        </>

    )
    }
    }
class Sample1 extends React.Component {
    render() {
        return(
            <>
            <h1>This is the heading Sample-1</h1>
            </>
        )
    }

}
class Sample2 extends React.Component {
    render() {
        return(
            <>
            <h1>This is the heading Sample-2</h1>
            </>
        )
    }

}
        


export default State;
