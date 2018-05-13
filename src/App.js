import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import store from './store';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Redirect to="/dashboard" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
