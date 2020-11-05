import './App.css';
import { Component } from 'react';
import Person from './Person';

class App extends Component {

  render() {
    return(
      <div className="App">
        <h1>Hi, My name is Chaman Gurjar.</h1>
        <p1>This is my official website.</p1>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </div>
    )
  }
}

export default App;
