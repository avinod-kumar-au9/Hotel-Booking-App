import React from "react";
import "./list.css";
import { Link, withRouter } from "react-router-dom";

import axios from "axios";

const rurl = "https://developerfunnel.herokuapp.com/hotellist";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      minVal: "",
      maxVal: "",
      cnt: 0,
    };
  }

  componentDidMount() {
    sessionStorage.setItem("tripId", this.props.match.params.id);

    axios
      .get(
        `https://developerfunnel.herokuapp.com/hotellist/${this.props.match.params.id}`
      )
      .then((resp) => {
        this.setState({
          data: resp.data,
        });
      });
  }

  changeHandler = (e) => {
    if (e.target.name === "inp1") {
      this.setState({
        ...this.state,
        minVal: e.target.value,
      });
    } else {
      this.setState({
        ...this.state,
        maxVal: e.target.value,
      });
    }
  };
  clickHandler = () => {
    console.log(
      `https://developerfunnel.herokuapp.com/hotellist/1?hcost=${this.state.maxVal}&lcost=${this.state.minVal}`
    );
    console.log(this.state);
    if (this.state.minVal && this.state.maxVal) {
      axios
        .get(
          `https://developerfunnel.herokuapp.com/hotellist/1?hcost=${this.state.maxVal}&lcost=${this.state.minVal}`
        )
        .then((resp) => {
          console.log(resp.data);
          this.setState({
            data: resp.data,
          });
        });
    }
  };

  datadisplay = () => {
    if (this.state.data) {
      if (this.state.data.length > 0) {
        return this.state.data.map((user, idx) => {
          return (
            <Link to={`/details/${user._id}`} className="row boxing" key={idx}>
              <div className="col-md-6 p-md-4">
                <img src={user.thumb} loading="lazy" className="w-100" alt="sdsd" />
              </div>
              <div className="col-md-6 p-4 ps-md-0">
                <h3 className="mt-0">{user.name}</h3>
                <p>{user.address}</p>
                <p>Cost : ${user.cost}</p>
              </div>
            </Link>
          );
        });
      } else {
        return <div className="nodata">No Data Found</div>;
      }
    } else {
      return (
        <img
          className="loader"
          src="https://flevix.com/wp-content/uploads/2020/01/Bounce-Bar-Preloader-1.gif"
        />
      );
    }
  };

  filterLogic = (event) => {
    let roomNumber = event.target.value;
    let tripId = sessionStorage.getItem("tripId");
    let roomurl;
    if (roomNumber == "") {
      roomurl = `${rurl}/${tripId}`;
    } else {
      roomurl = `${rurl}/${tripId}?roomtype=${roomNumber}`;
    }
    axios.get(roomurl).then((response) => {
      this.setState({
        data: response.data,
      });
    });
  };

  render() {
    // console.log("props", this.props);

    console.log("login", this.props);
    return (
      <div className="container">
        <div className="row bg-light maindiv">
          <div className="col-md-3">
            <div className="roomFilter">
              <h3>
                <center>Room Filter</center>
              </h3>
              <div onChange={this.filterLogic}>
                <label className="radio">
                  <input type="radio" value="" name="room" />
                  All
                </label>
                <label className="radio">
                  <input type="radio" value="1" name="room" />
                  Deluxe Room
                </label>
                <label className="radio">
                  <input type="radio" value="2" name="room" />
                  Premium Room
                </label>
                <label className="radio">
                  <input type="radio" value="3" name="room" />
                  Travel Room
                </label>
                <label className="radio">
                  <input type="radio" value="4" name="room" />
                  Semi Delux Room
                </label>
              </div>
            </div>

            <div onChange={this.changeHandler} className="filter">
              <h3 className="title">Price Filter</h3>

              <div className="paramgroup">
                <input
                  type="text"
                  className="form-control input"
                  placeholder="$Min"
                  aria-label="Username"
                  // aria-describedby="basic-addon1"
                  onChange={this.changeHandler}
                  name="inp1"
                />
                <input
                  type="text"
                  className="form-control input"
                  placeholder="$Max"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={this.changeHandler}
                  name="inp2"
                />
                <button
                  onClick={this.clickHandler}
                  className="btn btn-primary btn-sm"
                >
                  Go
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            {this.state.data.length > 0 ? (
              <h3>
                Hotels{" "}
                <span className="result">
                  {this.state.data.length} results found
                </span>{" "}
              </h3>
            ) : (
              ""
            )}
            {this.datadisplay()}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
