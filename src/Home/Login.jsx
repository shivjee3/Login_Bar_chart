import React from 'react';
import {Redirect} from 'react-router-dom';
import './login.css';

export default class Login extends React.Component {
    constructor(props){
        super(props);

        this.state= {
            username: "",
            password: "",
            userErr: "",
            passErr: "",
            loggedIn: false
        }
    }

    componentDidMount() {
        const token = localStorage.getItem("token");
        if (token !== ""){
            this.setState({loggedIn: true});
            
        }
    }

    onchange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitForm=(e)=>{
        e.preventDefault()
        const {username,password}=this.state
        if(username === "demo" && password === "123"){
            localStorage.setItem("token","akjfiurvkvig347fjs")
            this.setState({loggedIn:true})
        }else{
            this.setState({userErr:"* Invalid username or password!!"})
        }
    }

    render(){
       if(this.state.loggedIn){
           return <Redirect to="/BarCharts"/>
       }
        return (
            <div className="container">
            <div className="sub-container">
                <h1>Login</h1>

                <form onSubmit={this.submitForm}>
                   
                    <input className="inputs" type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.onchange} required />
                    <br/>
                    <br/>
                    <input className="inputs" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onchange} required />
                    
                    <div id="err" className="errormsg">{this.state.userErr}</div>
                    <input className="inputs" type="submit" value="Login" />
                    
                </form>
            </div>
            </div>
        );
    }
}



