import React, { Component } from 'react';
import { BrowserRouter , Route, Link } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">

        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
