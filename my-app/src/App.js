import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// import Home from './pags/Home';
import Login from './pags/Login';
import Scanner from './pags/Scanner';
import CreatingQRCode from './pags/CreatingQRCode';

class App extends Component {
  state = { email: '', password: ''}
  onChange = (key, val) => {this.setState({[key]: val})}
  render() {
    return (
      <div className="App">
      <BrowserRouter>
              <Link to='/Scanner'>Scanner</Link>
              <Link to='/CreatingQRCode'>CreatingQRCode</Link>
              <Link to='/'>Login</Link>
         <Switch>
           <Route exact path='/Scanner' render={() => <Scanner  />} />
           <Route exact path='/CreatingQRCode' render={() => <CreatingQRCode password={this.state.password} email={this.state.email} />} />
           <Route exact path='/' render={() => <Login onChange={this.onChange}/>} />
         </Switch>
       </BrowserRouter>
     </div>
    );
  }
}

export default App;