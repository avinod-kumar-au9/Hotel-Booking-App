import React from "react";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "./admin.css";
import "react-tabs/style/react-tabs.css";
class ViewBookings extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "",
      upcomingdata: "",
      pastdata: "",
      alldata: "",
      userval: "",
      status: "",
      date: "",
      hotelname: "",

      bookings: {},
    };
  }

  componentDidMount() {
    if (sessionStorage.getItem("usertype") == "User") {
      this.props.history.push("./viewbookings");
    }
  }

  acceptHandler = (e) => {
    axios
      .get(`http://localhost:3000/Bookings/${e.target.value}`)
      .then((resp) => {
        this.setState({
          ...this.state,
          userval: e.target.value,
          data: "",
          bookings: { ...resp.data, Status: "Accepted" },
        });
      });
  };

  rejectHandler = (e) => {
    axios
      .get(`http://localhost:3000/Bookings/${e.target.value}`)
      .then((resp) => {
        this.setState({
          ...this.state,
          userval: e.target.value,
          data: "",

          bookings: { ...resp.data, Status: "Rejected" },
        });
      });
  };

  upcomingBookings = () => {
    if (this.state.upcomingdata) {
      return this.state.upcomingdata.map((user, idx) => {
        return (
          <tr key={idx}>
            <td>{idx + 1}</td>
            <td>{user.Name}</td>
            <td>{user.Mobile}</td>
            <td>{user.hotelName}</td>
            <td>{user.Date}</td>
            <td>{user.Status}</td>
            <td>
              <button
                className="accetbutt"
                value={user.id}
                onClick={this.acceptHandler}
              >
                Accept
              </button>
              <button
                className="rejectbutt"
                value={user.id}
                onClick={this.rejectHandler}
              >
                Reject
              </button>
            </td>
          </tr>
        );
      });
    } else {
      return (
        <div>
          <center>No Data Found</center>
        </div>
      );
    }
  };

  pastBookings = () => {
    if (this.state.pastdata) {
      return this.state.pastdata.map((user, idx) => {
        return (
          <tr key={idx}>
            <td>{idx + 1}</td>
            <td>{user.Name}</td>
            <td>{user.Mobile}</td>
            <td>{user.hotelName}</td>
            <td>{user.Date}</td>
            <td>{user.Status}</td>
            <td>
              <button
                className="accetbutt"
                value={user.id}
                onClick={this.acceptHandler}
              >
                Accept
              </button>
              <button
                className="rejectbutt"
                value={user.id}
                onClick={this.rejectHandler}
              >
                Reject
              </button>
            </td>
          </tr>
        );
      });
    } else {
      return (
        <div>
          <center>No Data Found</center>
        </div>
      );
    }
  };

  allBookings = () => {
    if (this.state.alldata) {
      return this.state.alldata.map((user, idx) => {
        return (
          <tr key={idx}>
            <td>{idx + 1}</td>
            <td>{user.Name}</td>
            <td>{user.Mobile}</td>
            <td>{user.hotelName}</td>
            <td>{user.Date}</td>
            <td>{user.Status}</td>
            <td>
              <button
                className="accetbutt"
                value={user.id}
                onClick={this.acceptHandler}
              >
                Accept
              </button>
              <button
                className="rejectbutt"
                value={user.id}
                onClick={this.rejectHandler}
              >
                Reject
              </button>
            </td>
          </tr>
        );
      });
    } else {
      return (
        <div>
          <center>No Data Found</center>
        </div>
      );
    }
  };
  upcomingdateHandler = (e) => {
    if (this.state.upcomingdata) {
      let wholedata = this.state.upcomingdata.filter((fil) => {
        return e.target.value == fil.Date;
      });
      this.setState({
        ...this.state,
        upcomingdata: wholedata,
      });
    }
  };

  upcomingnameHandler = (e) => {
    if (this.state.upcomingdata) {
      let wholedata = this.state.upcomingdata.filter((fil) => {
        return e.target.value == fil.hotelName;
      });
      this.setState({
        ...this.state,
        upcomingdata: wholedata,
      });
    }
  };

  pastdateHandler = (e) => {
    if (this.state.pastdata) {
      let wholedata = this.state.pastdata.filter((fil) => {
        return e.target.value == fil.Date;
      });
      this.setState({
        ...this.state,
        pastdata: wholedata,
      });
    }
  };
  pastnameHandler = (e) => {
    if (this.state.pastdata) {
      let wholedata = this.state.pastdata.filter((fil) => {
        return e.target.value == fil.hotelName;
      });
      this.setState({
        ...this.state,
        pastdata: wholedata,
      });
    }
  };

  alldateHandler = (e) => {
    if (this.state.alldata) {
      let wholedata = this.state.alldata.filter((fil) => {
        return e.target.value == fil.Date;
      });
      this.setState({
        ...this.state,
        alldata: wholedata,
      });
    }
  };

  allnameHandler = (e) => {
    if (this.state.alldata) {
      let wholedata = this.state.alldata.filter((fil) => {
        return e.target.value == fil.hotelName;
      });
      this.setState({
        ...this.state,
        alldata: wholedata,
      });
    }
  };
  render() {
    if (!this.state.data) {
      let today = new Date().toISOString().slice(0, 10);

      axios.get("http://localhost:3000/Bookings").then((resp) => {
        let alldata = resp.data.sort(
          (a, b) => new Date(a.Date) - new Date(b.Date)
        );
        var pastdata = resp.data.sort(
          (a, b) => new Date(a.Date) - new Date(b.Date)
        );
        var upcomingdata = resp.data.sort(
          (a, b) => new Date(a.Date) - new Date(b.Date)
        );
        this.setState({
          ...this.state,
          data: resp.data,
          upcomingdata: upcomingdata.filter((fil) => {
            return fil.Date >= today;
          }),

          pastdata: pastdata.filter((fil) => {
            return fil.Date < today;
          }),
          alldata: alldata,
        });
      });
    }
    if (this.state.userval) {
      fetch(`http://localhost:3000/Bookings/${this.state.userval}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.bookings),
      });
    }
    return (
      <div>
        <div className="userDetails">
          <h2>
            Hi{" "}
            {sessionStorage.getItem("name")
              ? sessionStorage.getItem("name")
              : JSON.parse(sessionStorage.getItem("Guser_obj")).name}
          </h2>

          <p>
            Your Registered Email :{" "}
            <span>
              {sessionStorage.getItem("email")
                ? sessionStorage.getItem("email")
                : JSON.parse(sessionStorage.getItem("Guser_obj")).email}
            </span>
          </p>
          <p className="username">
            Role Type :{" "}
            <span>
              {sessionStorage.getItem("usertype")
                ? sessionStorage.getItem("usertype")
                : ""}
            </span>
          </p>
        </div>

        <div className="userDetails">
          <Tabs>
            <TabList className="tabslist">
              <Tab>Upcoming Bookings</Tab>
              <Tab>Past Bookings</Tab>
              <Tab>All Bookings</Tab>
            </TabList>

            <TabPanel>
              <table>
                <thead>
                  <tr>
                    <th>Id</th>

                    <th>Name</th>
                    <th>Mobile</th>
                    <th>
                      <select
                        className="hoteldropdown"
                        onChange={this.upcomingnameHandler}
                        defaultValue="Hotel"
                      >
                        <option disabled>Hotel</option>
                        {this.state.upcomingdata
                          ? this.state.upcomingdata.map((user) => {
                              return (
                                <option className="hoteloption">
                                  {user.hotelName}
                                </option>
                              );
                            })
                          : ""}
                      </select>
                    </th>
                    <th>
                      <select
                        className="hoteldropdown"
                        onChange={this.upcomingdateHandler}
                        defaultValue="Booking Date"
                      >
                        <option disabled>Booking Date</option>
                        {this.state.upcomingdata
                          ? this.state.upcomingdata.map((user) => {
                              return <option>{user.Date}</option>;
                            })
                          : ""}
                      </select>
                    </th>
                    <th>User Booking Status</th>
                    <th>Booking Action</th>
                  </tr>
                </thead>
                <tbody>{this.upcomingBookings()}</tbody>
              </table>
            </TabPanel>
            <TabPanel>
              <table>
                <thead>
                  <tr>
                    <th>Id</th>

                    <th>Name</th>
                    <th>Mobile</th>
                    <th>
                      <select
                        className="hoteldropdown"
                        onChange={this.pastnameHandler}
                        defaultValue="Hotel"
                      >
                        <option disabled>Hotel</option>
                        {this.state.pastdata
                          ? this.state.pastdata.map((user) => {
                              return <option>{user.hotelName}</option>;
                            })
                          : ""}
                      </select>
                    </th>
                    <th>
                      <select
                        className="hoteldropdown"
                        onChange={this.pastdateHandler}
                        defaultValue="Booking Date"
                      >
                        <option disabled>Booking Date</option>
                        {this.state.pastdata
                          ? this.state.pastdata.map((user) => {
                              return <option>{user.Date}</option>;
                            })
                          : ""}
                      </select>
                    </th>
                    <th>User Booking Status</th>
                    <th>Booking Action</th>
                  </tr>
                </thead>
                <tbody>{this.pastBookings()}</tbody>
              </table>
            </TabPanel>
            <TabPanel>
              <table>
                <thead>
                  <tr>
                    <th>Id</th>

                    <th>Name</th>
                    <th>Mobile</th>
                    <th>
                      <select
                        className="hoteldropdown"
                        onChange={this.allnameHandler}
                        defaultValue="Hotel"
                      >
                        <option disabled>Hotel</option>
                        {this.state.alldata
                          ? this.state.alldata.map((user) => {
                              return <option>{user.hotelName}</option>;
                            })
                          : ""}
                      </select>
                    </th>
                    <th>
                      <select
                        className="hoteldropdown"
                        onChange={this.alldateHandler}
                        defaultValue="Booking Date"
                      >
                        <option disabled>Booking Date</option>
                        {this.state.alldata
                          ? this.state.alldata.map((user) => {
                              return <option>{user.Date}</option>;
                            })
                          : ""}
                      </select>
                    </th>
                    <th>User Booking Status</th>
                    <th>Booking Action</th>
                  </tr>
                </thead>
                <tbody>{this.allBookings()}</tbody>
              </table>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default ViewBookings;
