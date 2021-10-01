import logo from "./logo.svg";
import "./App.scss";
import ComponentTop from "./Components/ComponentTop";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Developers form and Salaries</p>

        <ComponentTop />
      </header>
    </div>
  );
}

export default App;
