import './App.css';
import React, { useState } from 'react';
import Person from './Person';

const App = () => {

  const [personState, setPersonState] = useState({
    persons: [
      {name: 'Chaman Singh', age: 28},
      {name: 'Abhijeet Singh', age: 2.11},
      {name: 'Ajay', age: 21}
    ]
  });

 const switchNameHandler = () => {
    // NOTE :- Don't directly change the state like :- personState.persons[0].name = 'Changed Name'
    setPersonState({
      persons: [
        {name: 'Chaman Singh Gurjar', age: 30},
        {name: 'Abhijeet Singh', age: 2.11},
        {name: 'Ajay', age: 21}
      ]
    })
  }

    return(
      <div className="App">
        <h1>Hi, My name is Chaman Gurjar.</h1>
        <p>This is my official website.</p>
        <button onClick={switchNameHandler}> Change Name </button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}> My Hobbies Are :
        <li>Listening Music</li>
        <li>Reading Motivational Books</li>
        <li>Reading blogs regarding software development techniques.</li>
        <br></br>
        </Person>

        <Person 
        name={personState.persons[1].name} 
        age={personState.persons[1].age}
        click={switchNameHandler}>
        </Person>
        
        <Person name={personState.persons[2].name} age={personState.persons[2].age}></Person>
      </div>
    )
  }

export default App;
