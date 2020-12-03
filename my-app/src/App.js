import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// import Home from './pags/Home';
import Login from './pags/Login';
import Scanner from './pags/Scanner';
import CreatingQRCode from './pags/CreatingQRCode';
import ReportInsulation from './pags/ReportInsulation';
import UserManagement from './pags/UserManagement';

class App extends Component {
  state = { email: '', password: ''}
  onChange = (key, val) => {this.setState({[key]: val})}
  render() {
    return (
      <div className="App">
      <BrowserRouter>
              <Link to='/Scanner'>Scanner</Link>
              <Link to='/CreatingQRCode'>CreatingQRCode</Link>
              <Link to='/ReportInsulation'>ReportInsulation</Link>
              <Link to='/'>Login</Link>
              <Link to='/UserManagement'>UserManagement</Link>
         <Switch>
         <Route exact path='/UserManagement' render={() => <UserManagement  />} />
           <Route exact path='/ReportInsulation' render={() => <ReportInsulation  />} />
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