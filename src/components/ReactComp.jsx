import React, { Component } from 'react'
import PropTypes from 'prop-types';
//working on the proptypes of the component to validate the prob type
export default class ReactComp extends Component {
    constructor(){
        super();
        this.state=
        {
            msg:'Working on the prop types',
        
        }
        this.handleUpdate = this.handleUpdate.bind(this);
    }
     handleUpdate(){
        this.setState({
            msg:"This is new update"}
        ); 
    }
  render() {
    return (
        <>
        
      <div>ReactComp</div>
      <p>{this.state.msg}</p>
      <button onClick={this.handleUpdate}>Hello</button>
        </>
    )
  }
}
