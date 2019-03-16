import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Clients from './components/client/Clients';
import AddClient from './components/client/AddClient';
import Client from './components/client/Client';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import About from './components/layouts/About';
import Error404 from './components/layouts/Error404';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="main-body">
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Clients} />
              <Route path="/clients/add" exact component={AddClient} />
              <Route path="/clients/:id" exact component={Client} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/login" exact component={Login} />
              <Route path="/about" exact component={About} />
              <Route component={Error404} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
