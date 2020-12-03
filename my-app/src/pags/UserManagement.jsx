import React, { Component } from 'react';
import axios from 'axios';
import "./UserManagement.css";

class UserManagement extends Component {
    state = { name: '', id: '',peopleList: null }

    componentDidMount () {
        this.getList()
    }
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
      addUser = () => {
        axios
          .post("https://corona-manager-api.herokuapp.com/users/add",
            {
              name: this.state.name,
              id: this.state.id,
            }
          )
          .then((res) => {
              console.log(res);
              this.setState({ name:'',id:'' })
        this.getList()
          })
          .catch((err) => {
            console.log(err);
          });
      };
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
            <div>
                           <div className='UserManagement'>
                    <h3>UserManagement</h3>
<br></br>
<p>הוסף משתמש</p>
<from>
                        <input autoComplete="on" value={this.state.name} required onChange={e => this.setState({ name: e.target.value })} type="text" placeholder="הכנס שם" />
<br></br>
<br></br>
                        <input value={this.state.id} onChange={e => this.setState({ id: e.target.value })} required autoComplete="off" type="number" placeholder="הכנס ת.ז" />
                        <br></br>
<br></br>
                    <button type="button"  onMouseDown={() => { this.addUser() }}>הוסף</button></from>
                    <br></br>
                    <br></br>
                    <div>
                    {this.state.peopleList && <table>
            <tbody>
              <tr>{this.state.renderTableList}</tr>
              {this.state.peopleList}
            </tbody>
          </table>}
                    </div>
 
             </div> 
            </div>
        );
    }
}

export default UserManagement;