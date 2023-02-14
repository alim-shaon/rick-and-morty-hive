import React from "react";
import "./LocationCard.css";

const LocationCard = ({ location }) => {
  return (
    <div className="location-card-container p-3 mx-3">
      <p># {location.id}</p>
      <p style={{ fontSize: "24px" }}>{location.name}</p>
    </div>
  );
};

export default LocationCard;
