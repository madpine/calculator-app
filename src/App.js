import Calculator from './calculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Calculator />
      </div>
      <footer>
        Open-sourced {" "}
        <a href="https://github.com/madpine/calculator-app" target="_blank">code</a> by Maddie Pine
      </footer>
    </div>
  );
}

export default App;
