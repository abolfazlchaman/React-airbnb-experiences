import React, { Component } from "react";
import Frame from "./../../Images/Frame.png";
import "./TopFrame.css";

export default class TopFrame extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <img className="Frame" src={Frame} />
        </div>
        <h1 className="title">Online Experiences</h1>
        <h3 className="body">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </h3>
      </section>
    );
  }
}
