import './App.css';
import React, { Component } from 'react';
import Person from './Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Chaman Singh', age: 28},
      {name: 'Abhijeet Singh', age: 2.11},
      {name: 'Ajay', age: 21}
    ]
  };

  switchNameHandler = (name) => {
    // NOTE :- Don't directly change the state like :- personState.persons[0].name = 'Changed Name'
    this.setState({
      persons: [
        {name: name, age: 30},
        {name: 'Abhijeet Singh', age: 2.11},
        {name: 'Ajay', age: 21}
      ]
    })
  };

  
  render() {
    return(
      <div className="App">
        <h1>Hi, My name is Chaman Gurjar.</h1>
        <p>This is my official website.</p>
        <button onClick={ () => this.switchNameHandler("CHAMAN")}> Change Name </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>  
        My Hobbies Are :
        <li>Listening Music</li>
        <li>Reading Motivational Books</li>
        <li>Reading blogs regarding software development techniques.</li>
        <br></br>
        </Person>

        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>

        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    )
  }
}

export default App;
