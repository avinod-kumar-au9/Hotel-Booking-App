import React from "react";
import { Link } from "react-router-dom";
import "./detail.css";
class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "",
      tripId: "",
    };
  }

  componentDidMount() {
    var hotelid = this.props.match.params.id;
    fetch(`https://developerfunnel.herokuapp.com/hotelsdetails/${hotelid}`, {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          data: data[0],
          tripId: sessionStorage.getItem("tripId"),
        });
      });

      
      
      
  }

  

  display = () => {
    if (this.state.data) {
      return (
        <div>
          <div className="detailrow">
            <div className="detailcol">
              <img src={this.state.data.thumb} />
            </div>
            <div className="detailcol">
              <h2>{this.state.data.name}</h2>
              <p>Address : {this.state.data.address}</p>
              <p>
                cost : <strong>${this.state.data.cost}</strong>
              </p>
              <div className="detailsrow">
                <div className="detailscol">
                  <ul>
                    <h3> Avilable Trip Types</h3>

                    {this.state.data.tripType.map((user,idx) => {
                      return <li key={idx}>{user.name}</li>;
                    })}
                  </ul>
                </div>
                <div className="detailscol">
                  <ul>
                    <h3> Avilable Rooms</h3>

                    {this.state.data.type.map((user,idx) => {
                      return <li key={idx}>{user.name}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="butt">
            <Link to={`/list/${this.state.tripId}`}>
              <button className="back">Back</button>
            </Link>
           
              
              <Link to={`/booking/${this.state.data._id}`}>
              <button className="place">Go to Booking</button>
            </Link>
    
          </div>
        </div>
      );
    }else{
      return <img className="detailloadingimg" src="https://flevix.com/wp-content/uploads/2020/01/Bounce-Bar-Preloader-1.gif" />
    }
  };

  render() {
    console.log("details",this.props);
    sessionStorage.setItem("hotelname", this.state.data.name);
    sessionStorage.setItem("hoteladdress", this.state.data.address);
    if (sessionStorage.getItem("name")===null || sessionStorage.getItem("name")===undefined){
      localStorage.setItem("url",this.props.match.url)
    }
    return (
    <div>{this.display()}</div>
    )
  }
}

export default Details;
