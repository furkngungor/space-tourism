import React from 'react';
import "../../style/destination.css";

export default function Deimage({img}) {
  return (
    <div>
        <h6><b>01</b>PICK YOUR DESTINATION</h6>
        <img src={img} className="Destination-planet-image" alt=""></img>
    </div>
  )
}
