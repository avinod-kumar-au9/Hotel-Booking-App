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

  componentDidMount(){
    console.log("1st");
    if (sessionStorage.getItem("usertype") !== "User") {
      this.props.history.push("./adminpage");
    }
    
        this.setState({
          data: "",
        });
      
    }
  
  

  display = () => {
    if (this.state.data) {
      let alldata = this.state.data.sort(
        (a, b) => new Date(a.Date) - new Date(b.Date)
      )
      return alldata.filter(fil=>{
        return fil.Email === sessionStorage.getItem("email")
      })
      .map((user,idx) => {
        return (
          <tr key={user.id}>
            <td>{idx + 1}</td>
            <td>{user.Name}</td>
            <td>{user.Mobile}</td>
            <td>{user.hotelName}</td>
            <td>{user.Date}</td>
            <td>{user.Status}</td>
          </tr>
        );
      });
    }else if(this.state.data.length <= 0){
      return (

      
      <div><center>No Bookings Found</center></div>
      )
    }
  };

  render() {
    console.log("2st");
    if (!this.state.data){
      console.log("3st");
      axios
      .get(
        "http://localhost:3000/Bookings"
      )
      .then((resp) => {
        this.setState({
          data: resp.data,
        });
      });
    }
    return (
      <div>
        <div className="userDetails">
    <h2>Hi {sessionStorage.getItem("name") ? sessionStorage.getItem("name") :JSON.parse(sessionStorage.getItem("Guser_obj")).name }</h2>
    
    <p >Your Registered Email : <span>{sessionStorage.getItem("email") ? sessionStorage.getItem("email") :JSON.parse(sessionStorage.getItem("Guser_obj")).email}</span></p>
      <p className="username">Role Type : <span>{sessionStorage.getItem("usertype") ? sessionStorage.getItem("usertype") : ""}</span></p>
    <p>Check your Bookings Below</p>
    
        </div>
        <div className="userDetails">
          <table>
            <thead>
            <tr>
              <th>Id</th>

              <th>Name</th>
              <th>Mobile</th>
              <th>Hotel</th>
              <th>Booking Date</th>
              <th>Booking Status</th>
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
