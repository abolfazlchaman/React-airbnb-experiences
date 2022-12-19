import Cardimg1 from "./Images/image 12.png";
import Cardimg2 from "./Images/wedding-photography 1.png";
import Cardimg3 from "./Images/mountain-bike 1.png";
import Cardimg4 from "./Images/party.webp";
import Cardimg5 from "./Images/boat.webp";

const cardData = [
  {
    id:1,
    priceunit: "person",
    price: "136",
    stats: {
      votecount: "6",
      rating: "5",
    },
    location: "ONLINE",
    img: Cardimg1,
    description: "Life lessons with Katie Zaferes",
    openSpots:0
  },
  {
    id:2,
    priceunit: "person",
    price: "125",
    stats: {
      votecount: "30",
      rating: "5",
    },
    location: "ONLINE",
    img: Cardimg2,
    description: "Learn wedding photography",
    openSpots:6
  },
  {
    id:3,
    priceunit: "person",
    price: "50",
    stats: {
      votecount: "2",
      rating: "4.8",
    },
    location: "USA",
    img: Cardimg3,
    description: "Ride with us on a Group Mountain Biking trip",
    openSpots:15
  },
  {
    id:4,
    priceunit: "person",
    price: "69",
    stats: {
      votecount: "12",
      rating: "4.6",
    },
    location: "AMS",
    img: Cardimg4,
    description: "Party through Amsterdam's Red light District",
    openSpots:35
  },
  {
    id:5,
    priceunit: "person",
    price: "110",
    stats: {
      votecount: "72",
      rating: "4.3",
    },
    location: "AMS",
    img: Cardimg5,
    description: "Amsterdam Booze Cruise with Unlimited Drinks",
    openSpots:52
  },
];

export default cardData;
