import "./register.css";
import React from "react";
import axios from "axios"


class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      islogged:false,
      data:{
      name: "",
      email: "",
      password: "",
      
      
      }
    };
  }

  register = () => {
    fetch("http://localhost:3000/Register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.data),
    }).then(this.props.history.push("./login"));
  };

componentDidMount(){

  // if (sessionStorage.getItem("name") === null || sessionStorage.getItem("name") === undefined){
  //   this.setState({
  //     islogged:true
  //   })
  // }

  // console.log("login",this.props)
}
  

  email = (e) => {
    var data={...this.state.data}
    data.email= e.target.value
    this.setState({
      ...this.state,
      data
    });
  };
  name = (e) => {
    var data={...this.state.data}
    data.name= e.target.value
    this.setState({
      ...this.state,
      data
    });
  };
  password = (e) => {
    var data={...this.state.data}
    data.password= e.target.value
    this.setState({
      ...this.state,
      data
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="reg-container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label>
            <b>Name</b>
          </label>
          <input type="text" onChange={this.name} placeholder="Enter Name" />

          <label>
            <b>Email</b>
          </label>
          <input
            type="text"
            onChange={this.email}
            placeholder="Enter Email"
            required
          />

          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            onChange={this.password}
            placeholder="Enter Password"
            name="psw"
            required
          />

          <div className="clearfix">
            <button onClick={this.register} className="signupbtn">
              Sign Up
            </button>
          </div>
        </div>
        
        
        
      </div>
    );
  }
}

export default Register;
