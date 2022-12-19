import React, { Component } from "react";

//styles
import "./Card.css";

//functions
import { CardGenerator } from "../../Functions/Functions";

//data
import cardData from "../../data";

export default class Card extends Component {
  render() {
    return (
      <section className="border">
        {cardData.map(function (props) {
          return (
            <CardGenerator
              key={props.id}
              img={props.img}
              location={props.location}
              votecount={props.stats.votecount}
              rating={props.stats.rating}
              description={props.description}
              price={props.price}
              priceunit={props.priceunit}
              openspots={props.openSpots}
            />
          );
        })}
      </section>
    );
  }
}
