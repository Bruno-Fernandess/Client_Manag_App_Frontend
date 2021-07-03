import React, { Component } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ClientListComponent from "./component/ClientListComponent";


class App extends Component {
  render() {
    return (
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark p-4">
            <a href="/" className="navbar-brand">
              Client Management App
            </a>
          </nav>
            <ClientListComponent/>
        </div>

    );
  }
}

export default App;
