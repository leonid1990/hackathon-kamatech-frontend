import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import QrReader from 'react-qr-reader';

class Scanner extends Component {
    state = { RedirectLogin: false ,result:null}
    redirect = () => {this.setState({RedirectLogin:true})}
    handleError = err => {
        console.error(err)
      }
      handleScan = data => {
        if (data) {
          this.setState({
            result: JSON.parse(data),
          })
        }
      }
    render() { 
        if (this.state.RedirectLogin) { return <Redirect to='./' /> }
        return (
            <div>
                <h1>Scanner</h1>
             <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '22rem', margin: 'auto' }}
          showViewFinder={true} />
          <br></br>
          <br></br>
          {this.state.result && <p>{this.state.result}</p>   }
          <br></br>
          <br></br>
                <button type="button"  onMouseDown={() => { this.redirect() }}>חזרה לכניסה</button>
            </div>
        );
    }
}

export default Scanner;