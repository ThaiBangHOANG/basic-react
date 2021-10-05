import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";
import "./styles/global.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers/rootReducer";

const reduxStore = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
