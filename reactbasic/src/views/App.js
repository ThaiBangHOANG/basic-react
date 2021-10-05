import logo from "./logo.svg";
import "./App.scss";
import Navigation from "./Navigation/Navigation";
import "./Navigation/Navigation.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import News from "./Components/News";
import Contact from "./Components/Contact";
import About from "./Components/About";
import ListUsers from "./Axios/ListUsers";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navigation />
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/user">
              <ListUsers />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
