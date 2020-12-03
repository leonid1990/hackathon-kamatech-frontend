import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import QrReader from 'react-qr-reader';
import axios from 'axios';

class Scanner extends Component {
    state = { RedirectLogin: false ,result:null, Qr:null, userId:'', locationId:'',date:'', time:''}
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

      add = () => {
        axios
          .post("https://corona-manager-api.herokuapp.com/scan/",
            {
             userId: this.state.userId, 
             locationId: this.state.locationId,
             date: new Date (`${this.state.date}/${this.state.time}`)
            }
          )
          .then((res) => {
              console.log(res);
              this.setState({ userId:'',locationId:'',date:''})
          })
          .catch((err) => {
            console.log(err);
          });
      };
    render() { 
        if (this.state.RedirectLogin) { return <Redirect to='./' /> }
        return (
            <div>
                <h1>Scanner</h1>
           { this.state.Qr && <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '22rem', margin: 'auto' }}
          showViewFinder={true} />}
          <br></br>
          <br></br>
          <button onClick={()=>{this.setState({Qr:true})}}>הפעל סריקה</button>
          {this.state.result && <p>{this.state.result}</p>   }
          <br></br>
          <br></br>
                <button type="button"  onMouseDown={() => { this.redirect() }}>חזרה לכניסה</button>
                <br></br>
          <br></br>
          <input value={this.state.userId} required onChange={e => this.setState({ userId: e.target.value })} type="text" placeholder="userId" />
          <br></br>
          <br></br>
          <input value={this.state.locationId} required onChange={e => this.setState({ locationId: e.target.value })} type="text" placeholder="locationId" />
          <br></br>
          <br></br>
          <input value={this.state.date} required onChange={e => this.setState({ date: e.target.value })} type="date" placeholder="date" />
          <br></br>
<input type="time" onChange={e => this.setState({ time: e.target.value })} required/>
          <br></br>
          <button type="button"  onMouseDown={() => { this.add() }}>Add</button>
            </div>
        );
    }
}

export default Scanner;