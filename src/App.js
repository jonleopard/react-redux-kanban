import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Redirect to="/dashboard" />
        </Switch>
      </Router>
    );
  }
}

export default App;
