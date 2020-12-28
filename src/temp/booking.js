import React from "react";
import "./booking.css";
import { Link } from "react-router-dom";
const api = `http://localhost:3000/Bookings`;

class Booking extends React.Component {
  constructor() {
    super();

    this.state = {
      hotelName: sessionStorage.getItem("hotelname"),
      hotelAddress: sessionStorage.getItem("hoteladdress"),
      Name: "",
      Mobile: "",
      Date: "",

      Status: "Pending",
      Email: "",
    };
  }

  componentDidMount() {
    // console.log("in booking");
    if (
      (sessionStorage.getItem("name") === null ||
        sessionStorage.getItem("name") === undefined) &&
      (sessionStorage.getItem("Guser_token") === undefined ||
        sessionStorage.getItem("Guser_token") === null)
    ) {
      this.props.history.push("/login");
    }

    if (sessionStorage.getItem("name")) {
      this.setState({
        ...this.state,
        Name: sessionStorage.getItem("name"),
        Email: sessionStorage.getItem("email")
          
      });
    }
    if (sessionStorage.getItem("Guser_obj")) {
      this.setState({
        ...this.state,
        Name: JSON.parse(sessionStorage.getItem("Guser_obj")).name,
      });
    }
  }

  dateHandler = (e) => {
    this.setState({
      Date: e.target.value,
    });
  };
  nameHandler = (e) => {
    this.setState({
      Name: e.target.value,
    });
  };
  mobileHandler = (e) => {
    this.setState({
      Mobile: e.target.value,
    });
  };

  bookingHandler = () => {
    fetch(api, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then(this.props.history.push("/viewbookings"));

    localStorage.removeItem("url");
  };

  Link;
  render() {
    return (
      <div>
        <div className="container">
          <h2>Fill a bit details for making your holiday Awesome : </h2>

          <hr />

          <h3>{this.state.hotelName}</h3>
          <p>{this.state.hotelAddress}</p>

          <label>
            <b>Name</b>
          </label>
          <input
            type="text"
            placeholder="Name"
            value={this.state.Name}
            onChange={this.nameHandler}
          />
          <label>
            <b>Phone No.</b>
          </label>
          <input
            type="number"
            placeholder="Phone Number"
            value={this.state.Mobile}
            onChange={this.mobileHandler}
          />
          <div className="date">
            <label> Booking Date: </label>
            <input onChange={this.dateHandler} type="date" />
          </div>
          <div className="clearfix">
            <Link to="/">
              <button type="button" className="cancel">
                Cancel
              </button>
            </Link>
            <Link to="/viewbookings">
              <button className="sign" onClick={this.bookingHandler}>
                Place Booking
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Booking;
