import React from "react";
import { withRouter } from "react-router-dom";
import "./search.css";
class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "",
      hotel: "",
    };
  }

  componentDidMount() {
    fetch("https://developerfunnel.herokuapp.com/location", { method: "GET" })
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({
          data: data,
        })
      );
  }
  renderCity = () => {
    if (this.state.data) {
      return this.state.data.map((user) => {
        return (
          <option key={user._id} value={user.city}>
            {user.city_name}
          </option>
        );
      });
    }
  };

  cityHandler = (e) => {
    fetch(
      `https://developerfunnel.herokuapp.com/hotels?city=${e.target.value}`,
      { method: "GET" }
    )
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({
          hotel: data,
        })
      );
  };

  renderHotels = () => {
    if (this.state.hotel) {
      return this.state.hotel.map((user) => {
        return (
          <option key={user._id} value={user._id}>
            {user.name}, {user.city_name}
          </option>
        );
      });
    }
  };

  hotelHandler = (e) => {
    this.props.history.push(`/details/${e.target.value}`);
  };

  render() {
    if (this.state.data) {
      console.log(this.state.hotel);
    }
    return (
      <div class="container-fluid">
      <div className="row align-items-center background">
        <div className="col-lg-12">
          <div className="row justify-content-center align-items-center quick">
            <h2>Are you in a hurry to plan your trip, try</h2>
            <h1>Quick Book</h1>
            <div className="col-lg-2 first">
              <select onChange={this.cityHandler} defaultValue="Select City">
                <option disabled>Select City</option>
                {this.renderCity()}
              </select>
            </div>
            <div className="col-lg-2 first">
              <select onChange={this.hotelHandler} defaultValue="Select Hotel">
                <option disabled>Select Hotel</option>
                {this.renderHotels()}
              </select>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default withRouter(Search);
