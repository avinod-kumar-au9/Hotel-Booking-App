import React from "react";
import axios from "axios";
import "./viewbooking.css";
class ViewBookings extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "",
    };
  }

  

  display = () => {
    if (this.state.data) {
      return this.state.data.map((user) => {
        return (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.Name}</td>
            <td>{user.Mobile}</td>
            <td>{user.hotelName}</td>
            <td>{user.Date}</td>
          </tr>
        );
      });
    }
  };

  render() {
    
    if (!this.state.data){
      axios
      .get(
        "http://localhost:3000/Register"
      )
      .then((resp) => {
        this.setState({
          data: resp.data,
        });
      });
    }
    return (
      <div>
        <div>
    <h2>Hi {sessionStorage.getItem("name") ? sessionStorage.getItem("name") :JSON.parse(sessionStorage.getItem("Guser_obj")).name }</h2>
    
    <p className="email">Your Registered Email : <span>{sessionStorage.getItem("email") ? sessionStorage.getItem("email") :JSON.parse(sessionStorage.getItem("Guser_obj")).email}</span></p>

    <p>Check your Bookings Below</p>
    
        </div>
        <div>
          <table>
            <thead>
            <tr>
              <th>Id</th>

              <th>Name</th>
              <th>Mobile</th>
              <th>Hotel</th>
              <th>Booking Date</th>
            </tr>
            </thead>
            <tbody>
            {this.display()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ViewBookings;
