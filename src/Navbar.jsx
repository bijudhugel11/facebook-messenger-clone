import React, { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className="navbar__styles">
          <img
            src={process.env.PUBLIC_URL + "./small-messenger-logo.png"}
            alt="logo-1"
            className="logo-1 logo__height "
          />
          <img
            src={process.env.PUBLIC_URL + "./small-messenger-logo.png"}
            alt="logo-2"
            className="logo-2 logo__height"
          />
          <img
            src={process.env.PUBLIC_URL + "./small-messenger-logo.png"}
            alt="logo-3"
            className="logo-3 logo__height"
          />
          <img
            src={process.env.PUBLIC_URL + "./small-messenger-logo.png"}
            alt="logo-4"
            className="logo-4  logo__height"
          />
          <img
            className="img-fluid img-rounded"
            src={process.env.PUBLIC_URL + "./smallone.jpg"}
            alt="messenger-logo"
          />
        </div>
        <div className="bg-color">
          <h2>Hello from the messenger clone by Biju Khatri Dhungel</h2>
        </div>
      </>
    );
  }
}
