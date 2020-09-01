import React,{useState} from 'react';
import Home from './components/home'
import Register from "./components/register"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import {Provider} from 'react-redux';
import store from './store';
import Dashboard from "./components/dashboard"
import ForgotPass from "./components/forgotpass"

function App() {
  return (
    <Provider store={store}>
    <Router>
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/dashboard">
        <Dashboard/>
      </Route>
      <Route path="/forgotpass">
        <ForgotPass/>
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
  </Provider>
  );
}

export default App;
