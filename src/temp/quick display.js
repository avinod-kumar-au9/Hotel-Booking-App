import React from "react";
import { Link } from "react-router-dom";
import "./quickdisplay.css";
class QuickDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "",
    };
  }
  class;
  componentDidMount() {
    fetch("https://developerfunnel.herokuapp.com/booking", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data,
        });
      });

    sessionStorage.removeItem("tripId");
    sessionStorage.removeItem("hotelname");
    sessionStorage.removeItem("hoteladdress");
  }

  searchcall = () => {
    if (this.state.data) {
      return this.state.data.map((user) => {
        return (
          <Link
            key={user._id}
            to={`/list/${user.trip}`}
            className="row  sinitem"
          >
            <div className="col-lg-6 col-md-5  b1">
              <img className="img" src={user.image} />
            </div>
            <div className="col-lg-6 col-md-3 b2 text">
              <h3>{user.name}</h3>
              Plan {user.name} trip with us.
            </div>
          </Link>
        );
      });
    } else {
      return (
        <div className="container">
          <div className="row ">
            <div className="col-lg-6">
              <img
                className="loadingimg"
                src="https://flevix.com/wp-content/uploads/2020/01/Bounce-Bar-Preloader-1.gif"
              />
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    if (this.state.data) {
      console.log(this.state.data);
    }
    return (
      <div className="quicksea">
        <h4 className="title">Where to travel once in a lifetime..?</h4>
        <p className="title">Here You Go</p>
        <h3 className="title">Checkout the world's best hotels</h3>
        <div className="container-fuild">
          <div className="row justify-content-center div ">
            <div className="col-lg-6">{this.searchcall()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuickDisplay;
