import React, { Component } from 'react';
import { QRCode } from 'react-qr-svg';
import axios from 'axios';

class CreatingQRCode extends Component {
    state ={ShowQrReader: null, getList:''}
    Click = () => { 
        this.setState({ShowQrReader: true})}
        getList1 = (options) => {
            return options.map((option, index) => {
              return <option key={index} value={option._id}>{option.name}</option>
            })
          }

          componentDidMount () {
            this.getList()
          }
      getList = () => {
        axios.get('https://corona-manager-api.herokuapp.com/locations/all') 
          .then(res => {
            if (res.data !== []) {
              const peopleList = res.data
              if (peopleList.length > 0) {
              this.setState({getList:this.getList1(peopleList)})
            }}
          })
          .catch()
      }
    render() {
        return (
            <div>
                <h1>CreatingQRCode</h1>

                <select
                  value={this.state.selectvalue} 
                  onChange={(e) => this.setState({selectvalue: e.target.value, ShowQrReader: false})}
                >
                  <option value="82" hidden>בחר</option>
                  {this.state.getList}
                </select>
                <br></br>
                <br></br>
                <br></br>

               { !this.state.ShowQrReader &&  <button onClick={()=>{this.Click()}}>יצירת בר-קוד</button>}
              { this.state.ShowQrReader && <QRCode
                className='QRCode'
                level="Q"
                style={{ width: 150 }}
                value={JSON.stringify({
                   _id: this.state.selectvalue,
                })}
              />}
            </div>
        );
    }
}

export default CreatingQRCode;