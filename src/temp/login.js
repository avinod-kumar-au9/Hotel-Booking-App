import axios from "axios";
import React from "react";
import "./login.css";
import googlekeys from "../googlekeys.json";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      data: "",
      islogged: false,
    };
  }

  login = () => {
    if (this.state.data.length > 0) {
      for (var i = 0; i < this.state.data.length; i++) {
        if (
          this.state.data[i].email !== this.state.email ||
          this.state.data[i].password !== this.state.password
        ) {
          this.setState({
            ...this.state,
            error: "Enter Valid Credentials",
          });
        } else if (this.state.data[i].email === this.state.email) {
          sessionStorage.setItem("name", this.state.data[i].name);
          sessionStorage.setItem("id", this.state.data[i].id);
          sessionStorage.setItem("email", this.state.data[i].email);

          if (
            localStorage.getItem("url") === null ||
            localStorage.getItem("url") === undefined
          ) {
            this.props.history.push(`./viewbookings`);
          } else {
            this.props.history.push(`${localStorage.getItem("url")}`);
          }
        }
      }
    }
  };

 

  loggedinstate = (resp) => {
    if (!resp && !resp.accessToken) {
      alert("login failed");
      return;
    } else {
      var user_token = resp.accessToken;
      var user_Data = resp.profileObj;

      sessionStorage.setItem("Guser_token", JSON.stringify(user_token));
      sessionStorage.setItem("Guser_obj", JSON.stringify(user_Data));
      if (
        localStorage.getItem("url") === null ||
        localStorage.getItem("url") === undefined
      ) {
        this.props.history.push(`./viewbookings`);
      } else {
        this.props.history.push(`${localStorage.getItem("url")}`);
      }
    }
  };

  emailchange = (e) => {
    this.setState({
      ...this.state,
      email: e.target.value,
    });
  };
  passwordchange = (e) => {
    this.setState({
      ...this.state,
      password: e.target.value,
    });
  };

  render() {
    if (!this.state.data) {
      axios.get("http://localhost:3000/Register").then((resp) =>
        this.setState({
          ...this.state,
          data: resp.data,
        })
      );
    }

    return (
      <div>
        <div className=" form-container">
          <h2>Login Form</h2>
          <p>Please login to enjoy seamless bookings.</p>
          <hr />
          <label>Email</label>
          <input
            onChange={this.emailchange}
            type="text"
            placeholder="Enter Email"
          />

          <label>Password</label>
          <input
            onChange={this.passwordchange}
            type="password"
            placeholder="Enter Password"
          />
          <p style={{ color: "orangered" }}>
            {this.state.error ? this.state.error : ""}
          </p>

          <button className="btn" onClick={this.login}>
            Login
          </button>
          <br />

          <p className="or">OR</p>

          <GoogleLogin
            className="glogin"
            clientId={googlekeys.clientId}
            onSuccess={this.loggedinstate}
            onFailure={this.loggedinstate}
            buttonText="Login with Google"
          />
        </div>
      </div>
    );
  }
}

export default App;
