import React from "react";
import Header from "./header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import List from "./list";
import Details from "./details";
import Booking from "./booking";
import ViewBooking from "./viewbookings";
import AdminPage from "./AdminViewbookings";
import Login from "./login";
import Register from "./register";

class Routes extends React.Component {
  

  
  render() {
    
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/list/:id" component={List} />
        <Route path="/details/:id" component={Details} />
        <Route path="/booking/:id" component={Booking} />
        <Route path="/viewbookings" component={ViewBooking} />
        <Route path="/adminpage" component={AdminPage} />
      </BrowserRouter>
    );
  }
}

export default Routes;
