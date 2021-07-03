import React, { Component } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from 'react-router-dom';
import ClientListComponent from "./component/ClientListComponent";
import ClientComponent from "./component/ClientComponent";
import ClientAddComponent from "./component/ClientAddComponent";



class App extends Component {
  render() {
    return (
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark p-4">
            <a href="/" className="navbar-brand">
              Client Management App
            </a>
          </nav>
            <Switch>
                <Route exact path={["/", "/clients"]} component={ClientListComponent} />
                <Route exact path="/clients/add" component={ClientAddComponent} />
                <Route path="/clients/:nif" component={ClientComponent} />
            </Switch>
        </div>


    );
  }
}

export default App;
