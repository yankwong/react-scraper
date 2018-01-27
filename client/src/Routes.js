import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Saved from './components/Saved'

import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';

export default class Routes extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
        <Navbar />
        <Jumbotron classes="main-jumbotron"/>
        <Switch>
          <Route
            path="/"
            exact={true}
            component={App}
          />
          <Route
            path="/saved"
            exact={true}
            component={Saved}
          />
        </Switch>
        </div>
      </BrowserRouter>
    )
  }
}