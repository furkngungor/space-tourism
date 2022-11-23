import React from 'react';
import "../../style/destination.css";

export default function Decontent({content}) {
  return (
    <div>
      <h2>{content.name}</h2>
      <p>
        {content.description}
      </p>
      <hr></hr>
      <div className="Destination-planet-description-container">
        <div className="Destination-planet-description">
          <h5>AVG. DISTANCE</h5>
          <h3>{content.distance}</h3>
        </div>
        <div className="Destination-planet-description">
          <h5>EST. TRAVEL TIME</h5>
          <h3>{content.travel}</h3>
        </div>
      </div>
    </div>
  )
}
