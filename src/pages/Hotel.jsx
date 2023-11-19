import React, { useState } from "react";
import "../styles/hotel.css";

const hotel = [
  {
    id: 1,
    name: "Hotel Taj",
    rating: 4.5,
    description: "A beautiful hotel in the heart of the city.",
    image:
      "https://www.hlimg.com/images/stories/738X538/rambagh_palace_-_exterior_4_jaipur_1429965579u20.jpg",
    details: {
      location: "Hyderabad",
      price: 5000,
      beds: 50,
    },
  },
  // Add other hotels here
];

function Hotel({ hotel }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const bookRoom = () => {
    alert("Room booked successfully!");
  };

  return (
    <div className="hotel">
      <img src={hotel.image} alt={hotel.name} />
      <div className="content">
        <h3>{hotel.name}</h3>
        <div className="rating">Rating: {hotel.rating}</div>
        <p className="description">{hotel.description}</p>
        <button onClick={toggleDetails}>Show Details</button>
        {showDetails && (
          <div className="details">
            <p>Location: {hotel.details.location}</p>
            <p>Price per day: {hotel.details.price} RS</p>
            <p>Available beds: {hotel.details.beds}</p>
            <button onClick={bookRoom}>Book Room</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hotel;
