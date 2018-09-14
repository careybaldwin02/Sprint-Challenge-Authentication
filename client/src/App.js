import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className = "header-wrap">
        <header className="App-header">
        <div className = "navigation">
          <button > Sign in </button>
          <button > Register </button>
          <button > Sign Out </button>
        </div>
          <h1 className="App-title">Authentication Sprint Challenge</h1>
        </header>
        </div>
      
      {/* <div className = "routes"> 
        <Route path = "/register" component = { Register } />
        <Route path = "/signin" component = { Signin } />
        <Route path = "/users" component = { Users } />
      </div> */}

      </div>
    );
  }
  
  // logout = event => {
  //   localStorage.removeItem('jwt');
  //   this.props.history.push('./signin');
  // };

  // routeToSignin = event => {
  //   this.props.history.push('/signin')
  // };

  // routeToRegister = event => {
  //   this.props.history.push('/register')
  // };

}

export default withRouter(App);

