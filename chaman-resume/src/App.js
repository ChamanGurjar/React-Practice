import './App.css';
import About from './Components/About';
import Experience from './Components/Experience';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience isFromLink={"NO"} />
    </div >

  );
}

export default App;
