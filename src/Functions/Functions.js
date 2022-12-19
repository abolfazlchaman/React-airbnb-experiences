import Ratingstar from "../Images/Star.png";
let badgetext;

function CardGenerator(props) {

  // determine badge text
  if (props.openspots == 0) {
    badgetext = "SOLD OUT";
    
  } else if(props.location =="ONLINE") {
    badgetext = "ONLINE";

  }else{
    badgetext = false
  }

  return (
    <div className="card--container">
      <div className="container--img">

        {/* card image text badge:  */}
        {badgetext &&
         <div className="top-left sold--out">{badgetext}
         </div>
        }
        

        <img src={props.img} />
      </div>

      <div className="card--body--container">
        <h4>
          <img className="star--rating" src={Ratingstar} />
          {props.rating}

          <div className="faded">
            ({props.votecount}){"\u0020 \u00B7"} {props.location}
          </div>
        </h4>

        <p>{props.description}</p>

        <h6>
          <b>From: ${props.price}</b>
          {"\u0020 \u2044"} {props.priceunit}
        </h6>
      </div>
    </div>
  );
}

export { CardGenerator };
