import React from 'react';
import {Redirect} from 'react-router-dom';
import {BarChart, Bar, XAxis, YAxis, Tooltip, Legend} from 'recharts';

import './barchat.css';



class BarCharts extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      loggedIn:true,
      valErr:"",
      dataA: 5,
      dataB: 10,
      dataC: 18,
      dataD: 8,
      dataE: 13
    }
    const token = localStorage.getItem("token") 
    if(token === ""){
      this.state.loggedIn = false
    }   
  }

  _logout=()=>{
    localStorage.setItem("token", "")
    this.setState({loggedIn: false});
    //return <Redirect to="/" />
  };

  onchange=(e)=>{
    if (e.target.value >= 5 && e.target.value <= 20) {
      this.setState({[e.target.name]:e.target.value})
      e.target.className = "input1";
    } else {
      e.target.className = "input1 fail";
    }
  } 


  render(){
    if(this.state.loggedIn === false){
      return <Redirect to="/" />
    }
    var data1 = [
      {
        name: 'A', marks: this.state.dataA
      },
      {
        name: 'B', marks: this.state.dataB
      },
      {
        name: 'C', marks: this.state.dataC
      },
      {
        name: 'D', marks: this.state.dataD
      },
      {
        name: 'E', marks: this.state.dataE
      },
    ];
  return (
   
    <div className="container1">
      <header className="header">
        <span className="headertxt1">BarChart</span>
        <span className="headertxt2" onClick={this._logout}>Logout</span>
      </header>
      <div className="inputall">
      <h2>Marks</h2>
          <label>A : </label>
          <input className="input1" type="number" placeholder={this.state.dataA.toString()} min="5" max="20" name="dataA"  onChange={this.onchange} required />
          <br/>
          <label>B : </label>
          <input className="input1" type="number" placeholder={this.state.dataB.toString()}  min="5" max="20" name="dataB"  onChange={this.onchange} required />
          <br/>
          <label>C : </label>
          <input className="input1" type="number" placeholder={this.state.dataC.toString()}  min="5" max="20" name="dataC"   onChange={this.onchange} required />
          <br/>
          <label>D : </label>
          <input className="input1" type="number" placeholder={this.state.dataD.toString()}  min="5" max="20" name="dataD"   onChange={this.onchange} required />
          <br/>
          <label>E : </label>
          <input className="input1" type="number" placeholder={this.state.dataE.toString()}  min="5" max="20" name="dataE"  onChange={this.onchange} required />
          <br/>
      </div>
    
      <div className="chart">  
        <BarChart
          width={500}
          height={350}
          data={data1}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}>
        
          
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 20]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="marks" fill="#8884d8" />
        </BarChart>      
      </div>
    </div>
  );
  }
}

export default BarCharts;
