import React from 'react';
// import {useState} from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
     displayBlock:false,
     name:"Blog Work"
    }
    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  }
  toggleDisplayBio(){
    console.log('clicked')
    this.setState({displayBlock:!this.state.displayBlock})
  }
  render(){
    const block = this.state.displayBlock?
  
    <Stateless/>:'Ooops something went wrong';
    return(
      <>
        <div>{this.state.name}</div>
        <div className="App">
          <h1>Welcome to Learn something intresting</h1><br/><button onClick={this.toggleDisplayBio}>show</button> <hr/>
          {block}
        </div>
      </>
    )
  }
}
function Stateless(){
 
  return(
    <>
      <div>  
                  <p><h3>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h3></p>   
            </div>  
    </>
  )
}
export default App;
