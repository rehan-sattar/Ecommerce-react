import React, { Component } from 'react';
import { Router} from "react-router-dom";
import { createBrowserHistory } from "history";
import AppRouter from "./routes/AppRouter";
import './App.css';
const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
            <AppRouter />
        </Router>
      </div>
    );
  }
}

export default App;
