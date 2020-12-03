import React, { Component } from 'react';
import axios from 'axios';
import "./ReportInsulation.css";

class ReportInsulation extends Component {
    state = { idPlace: '', idMan: '', dateMan: '', endDay:'', startDay:'', peopleList:null, place:null,man:null }

      getList = () => {
        axios.get('https://corona-manager-api.herokuapp.com/users/all') //  זמני צריך api 
          .then(res => {
            if (res.data !== []) {
              const peopleList = res.data
              console.log(peopleList);
              if (peopleList.length > 0) { this.setState({renderTableList:this.renderTableList(), peopleList: this.ListToTable(peopleList)}) }
            }
          })
          .catch()
      }

    renderTableList() {
        // let header = ['שם משפחה', 'שם פרטי', 'אימייל', 'פלאפון', 'תפקיד', 'סטאטוס']
        let header = ['ת.ז', 'שם']
        return header.map((h, index) => {
          return <th key={index}>{h}</th>
        })
      }

      ListToTable = peopleList => {
        return peopleList.map((user, index) => {
              return (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              {/* <td>{user.email}</td>
              <td>{user.cellPhone}</td>
              <td>{user.role}</td>
              <td>{user.status}</td> */}
            </tr>
          )
        })
      }
    render() {
        return (
            <div className='ReportInsulation'>
                <br/><br/><br/>
          <button onClick={()=>{this.setState({place:true,man:null, peopleList:null})}}>place</button>
                <br/><br/>
                <button onClick={()=>{this.setState({place:null,man:true, peopleList:null})}}>man</button>
                <br/><br/>
{this.state.place && <div>
                    <h3>Report Insulation place</h3>
<br></br>
                        <input autoComplete="on" required onChange={e => this.setState({ idPlace: e.target.value })} type="text" placeholder="הכנס ת.ז" />
<br></br>
<br></br>
<input onChange={e => this.setState({ startDay: e.target.value })} required autoComplete="off" type="date" placeholder="יום התחלה" />
<br></br>
<br></br>
                        <input onChange={e => this.setState({ endDay: e.target.value })} required autoComplete="off" type="date" placeholder="יום סיום" />
<br></br>
<br></br>
                    <button type="button"  onMouseDown={() => { this.getList() }}>עדכן</button>
                    <br></br>
                    <br></br> 
                          </div> }
                          {this.state.man && <div>
                    <h3>Report Insulation man</h3>
<br></br>
                        <input autoComplete="on" required onChange={e => this.setState({ idMan: e.target.value })} type="text" placeholder="הכנס ת.ז" />
<br></br>
<br></br>
                        <input onChange={e => this.setState({ dateMan: e.target.value })} required autoComplete="off" type="date" placeholder="יום" />
<br></br>
<br></br>
                    <button type="button"  onMouseDown={() => { this.getList() }}>עדכן</button>
                    <br></br>
                    <br></br> 
                          </div> }
             <div>
                    {this.state.peopleList && <table>
            <tbody>
              <tr>{this.state.renderTableList}</tr>
              {this.state.peopleList}
            </tbody>
          </table>}
                    </div>
            </div>
        );
    }
}

export default ReportInsulation;