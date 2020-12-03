import React, { Component } from 'react';
import { QRCode } from 'react-qr-svg';

class CreatingQRCode extends Component {
    state ={ShowQrReader: null}
    Click = () => { 
        this.setState({ShowQrReader: true})}
    render() {
        return (
            <div>
                <h1>CreatingQRCode</h1>
               { !this.state.ShowQrReader &&  <button onClick={()=>{this.Click()}}>יצירת בר-קוד</button>}
              { this.state.ShowQrReader && <QRCode
                className='QRCode'
                level="Q"
                style={{ width: 150 }}
                value={JSON.stringify({
                   room: 752,
                   id:42189
                })}
              />}
            </div>
        );
    }
}

export default CreatingQRCode;