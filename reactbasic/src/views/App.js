import logo from "./logo.svg";
import "./App.scss";
import ExampleComponents from "./Example/ExampleComponents";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Basic</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <ExampleComponents />
      </header>
    </div>
  );
}

export default App;
