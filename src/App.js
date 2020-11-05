import './App.css';
import { Component } from 'react';
import Person from './Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Chaman Singh', age: 28},
      {name: 'Abhijeet Singh', age: 2.11},
      {name: 'Ajay', age: 21}
    ]
  }

  render() {
    return(
      <div className="App">
        <h1>Hi, My name is Chaman Gurjar.</h1>
        <p1>This is my official website.</p1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    )
  }
}

export default App;
