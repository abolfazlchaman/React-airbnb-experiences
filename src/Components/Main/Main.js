import React, { Component } from "react";

//components
import Header from "../Header/Header";
import TopFrame from "../TopFrame/TopFrame";
import Cards from "../Card/Card";

//styles
import "./Main.css";

export default class Main extends Component {
  render() {
    return (
      <section className="Main">
        <Header />
        <TopFrame />
        <Cards />
      </section>
    );
  }
}
