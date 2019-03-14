import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Clients from './components/client/Clients';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-body">
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/" component={Clients} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;