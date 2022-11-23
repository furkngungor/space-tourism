import React, { useState } from 'react';
import planetImage from "../assets/destination/image-moon.png";
import "../style/destination.css";


export default function Destination({planetData}) {
  const [planetId, setPlanetId] = useState(1);
  function handleClick(event) {
    const {value} = event.target;
    setPlanetId(value);
  }
  return (
    <div>
      <main className="Main">
        <section className="Destination">
          <div className="container">
            <div className="Destination-planet">
              <h6><b>01</b>PICK YOUR DESTINATION</h6>
              <img src={planetImage} className="Destination-planet-image" alt=""></img>
            </div>
            <div className="Destination-planet-content">
              <nav className="Destination-navigation">
                <button className="Destination-navigation-button" onClick={handleClick} value={0}>MOON</button>
                <button className="Destination-navigation-button" onClick={handleClick} value={1}>MARS</button>
                <button className="Destination-navigation-button" onClick={handleClick} value={2}>EUROPA</button>
                <button className="Destination-navigation-button" onClick={handleClick} value={3}>TITAN</button>
              </nav>
              <h2>{planetData[planetId].name}</h2>
              <p>
                {planetData[planetId].description}
              </p>
              <hr></hr>
              <div className="Destination-planet-description-container">
                <div className="Destination-planet-description">
                  <h5>AVG. DISTANCE</h5>
                  <h3>{planetData[planetId].distance}</h3>
                </div>
                <div className="Destination-planet-description">
                  <h5>EST. TRAVEL TIME</h5>
                  <h3>{planetData[planetId].travel}</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}