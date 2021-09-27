import logo from "./logo.svg";
import "./App.scss";
import ExampleComponents from "./Example/ExampleComponents";
import ReactForm from "./Example/ReactForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Basic</p>

        <ExampleComponents />
        <ReactForm />
      </header>
    </div>
  );
}

export default App;
