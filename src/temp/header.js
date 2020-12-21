import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./header.css";

class Header extends React.Component {
  constructor() {
    super();
  }

  Handler = () => {
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("Guser_token");
    sessionStorage.removeItem("Guser_obj");
  };

  render() {
    if (
      (sessionStorage.getItem("name") === null ||
        sessionStorage.getItem("name") === undefined) &&
      (sessionStorage.getItem("Guser_token") === null ||
        sessionStorage.getItem("Guser_token") === undefined)
    ) {
      return (
        <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <div className="container-fluid">
              <ul className="navbar-nav me-auto mb-1 mb-lg-0">
                <div>
                  <li className="nav-item ">
                    <Link to="/" className="nav-link items">
                      Home
                    </Link>
                  </li>
                </div>
              </ul>
              <ul className="navbar-nav mr-auto mb-1 mb-lg-0">
                <ul className="navbar-nav mr navbar-right  ">
                  <li className="nav-item">
                    <Link to="/register" className="nav-link items">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link items">
                      Login
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          </nav>
        </div>
      );
    } else {
      return (
        <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <div className="container-fluid">
              <ul className="navbar-nav me-auto mb-1 mb-lg-0">
                <div>
                  <li className="nav-item ">
                    <Link to="/" className="nav-link items">
                      Home
                    </Link>
                  </li>
                </div>
              </ul>
              <ul className="navbar-nav mr-auto mb-1 mb-lg-0">
                <ul className="navbar-nav mr navbar-right  ">
                  <li className="nav-item left ">
                    <Link
                      to="/viewbookings"
                      className="nav-link items nav-span "
                    >
                      <span className="material-icons">account_circle </span>
                      <span>
                        {sessionStorage.getItem("name")
                          ? sessionStorage.getItem("name")
                          : JSON.parse(sessionStorage.getItem("Guser_obj"))
                              .name}
                      </span>
                    </Link>
                  </li>

                  <li className="nav-item left" onClick={this.Handler}>
                    <Link to="/" className="nav-link items">
                      Logout
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          </nav>
        </div>
      );
    }
  }
}

//   return (
//     <div>
//       <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
//         <div className="container-fluid">
//           <ul className="navbar-nav me-auto mb-1 mb-lg-0">
//             <div>
//               <li className="nav-item ">
//                 <Link to="/" className="nav-link items">
//                   Home
//                 </Link>
//               </li>
//             </div>
//           </ul>
//           <ul className="navbar-nav mr-auto mb-1 mb-lg-0">
//             <ul className="navbar-nav mr navbar-right  ">
//               <li className="nav-item">
//                 <Link to="/register" className="nav-link items">
//                   Sign Up
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/login" className="nav-link items">
//                   Login
//                 </Link>
//               </li>
//             </ul>
//             <ul className="navbar-nav mr navbar-right  ">
//               <li className="nav-item left ">
//                 <Link to="/viewbookings" className="nav-link items nav-span ">
//                   <span className="material-icons">account_circle </span>
//                   <span>{sessionStorage.getItem("name")}</span>
//                 </Link>
//               </li>

//               <li className="nav-item left" onClick={this.Handler}>
//                 <Link to="/" className="nav-link items">
//                   Logout
//                 </Link>
//               </li>
//             </ul>
//             {/* {this.loginhide()} */}
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// }

export default withRouter(Header);
