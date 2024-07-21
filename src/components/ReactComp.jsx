import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
//working on the proptypes of the component to validate the prob type
/**
 * 1. forceUpdate():- allow to update the component forcefully. Component.forceUpdate(callback);
 * 2. 
 */
export default class ReactComp extends Component {
    constructor(){
        super();
        this.state=
        {
            msg:'Working on the prop types',
        
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.forceUpdateState = this.forceUpdateState.bind(this);
        this.findDomNodeHandler1 = this.findDomNodeHandler1.bind(this);
        this.findDomNodeHandler2 = this.findDomNodeHandler2.bind(this);
    }
     handleUpdate(){
        this.setState({
            msg:"This is new update"}
        ); 
    }
    forceUpdateState(){
      this.forceUpdate()
    }
    findDomNodeHandler1() {  
      var myDivOne = document.getElementById('myDivOne');  
      ReactDOM.findDOMNode(myDivOne).style.color = 'red';  
  }  
  findDomNodeHandler2() {  
      var myDivTwo = document.getElementById('myDivTwo');  
      ReactDOM.findDOMNode(myDivTwo).style.color = 'blue';  
  }  
  render() {
    return (
        <>
      <div>
      <div>ReactComp</div>
      <p>{this.state.msg}</p>
      <button onClick={this.handleUpdate}>Hello</button>
        <div>
          <h2>To Generate the random number </h2>
          <h4>Random Number :{Math.random()}</h4>
          <button onClick={this.forceUpdateState}>Force Update</button>
        </div>
      </div>
      <div>  
             <h1>ReactJS Find DOM Node Example</h1>  
             <button onClick = {this.findDomNodeHandler1}>FIND_DOM_NODE1</button>  
             <button onClick = {this.findDomNodeHandler2}>FIND_DOM_NODE2</button>  
             <h3 id = "myDivOne">JTP-NODE1</h3>  
             <h3 id = "myDivTwo">JTP-NODE2</h3>  
         </div>  
        </>
    )
  }
}
