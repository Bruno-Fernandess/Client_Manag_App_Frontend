import React, { Component } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  render() {
    return (
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark p-4">
            <a href="/" className="navbar-brand">
              Client Management App
            </a>
          </nav>
        </div>
    );
  }
}

export default App;
