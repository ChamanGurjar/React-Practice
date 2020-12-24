import logo from './logo.svg';
import './App.css';
import Candidate from './components/Candidate';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Learning React...</h1>

      <Candidate firstName="Chaman" lastName="Singh" />
      <Candidate firstName="Abhijeet" lastName="Gurjar" />
      <Candidate firstName="Ajay" lastName="Kapasiya" />
    </div>
  );
}

export default App;
