import React from "react";
import "../assets/company-logo/main-logo.png";

class Header extends React.Component {
  render() {
    return (
      <div className="header_container">
        <div className="logo_container">
          <img
            className="main_logo"
            src={require("../assets/company-logo/main-logo.png")}
          />
        </div>
        <div className="button_container">
          <button className="btn button1">Home</button>
          <button className="btn button2">Startup</button>
          <button className="btn button3">Package</button>
          <button className="btn button4">Services</button>
          <button className="btn button5">Order</button>
          <button className="btn button6">Hosting</button>
          <button className="btn button7">Existing</button>
          <button className="btn button8">Clients</button>
          <button className="btn button9">Contact</button>
        </div>
      </div>
    );
  }
}

export default Header;
