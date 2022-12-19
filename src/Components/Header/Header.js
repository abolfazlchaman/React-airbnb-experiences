import React, { Component } from "react";
import logo from "./../../Images/airbnb.png";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header className="shadow">
        <img className="logo" src={logo} />
      </header>
    );
  }
}
