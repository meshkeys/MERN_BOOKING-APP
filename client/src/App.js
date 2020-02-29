import React, { Component } from 'react';
import './Components/App.css';
import HomePage from './Components/HomePage';
import SignUpForm from './Forms/SignUpForm';
import LoginForm from './Forms/LoginForm'; 
import { NavLink, Switch, Route } from 'react-router-dom';


class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="nav">
          <NavLink exact to="/" activeClassName="active"></NavLink>
          <NavLink to="/signUpForm" activeClassName="active"></NavLink>
          <NavLink to="/LoginForm" activeClassName="active"></NavLink>
          <NavLink to="/" activeClassName="active"></NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/SignUpForm" component={SignUpForm} />
          <Route path="/LoginForm" component={LoginForm} />
          {/* <Route path="" component={} /> */}
        </Switch>
      </div>
    );
  }
  
}

export default App;

