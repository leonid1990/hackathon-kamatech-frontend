import React, { Component } from 'react';
// import axios from 'axios';
import { Redirect } from 'react-router-dom';


class Login extends Component {

    state = { email: '', password: '',RedirectScanner: false }
    login = () => { this.props.onChange();this.setState({RedirectScanner:true})}
    render() {
        if (this.state.RedirectScanner) { return <Redirect to='./Scanner' /> }
        return (
            <div className='Login'>
                    <h3>כניסה</h3>
                <p>ברוכים הבאים</p>
<br></br>
                        <input autoComplete="on" required onChange={e => this.setState({ email: e.target.value })} type="text" placeholder="הכנס איימיל" />
<br></br>
<br></br>
                        <input onChange={e => this.setState({ password: e.target.value })} required autoComplete="off" type="password" placeholder="סיסמה" />
<br></br>
<br></br>
                    <button type="button"  onMouseDown={() => { this.login() }}>כניסה</button>
 
             </div>
        );
    }
}

export default Login;