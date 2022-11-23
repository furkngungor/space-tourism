import React, {useState, useEffect} from 'react';
import {useRouteMatch} from "react-router-dom";
import axios from "axios";
import "../style/crew.css";
import Crewcarousel from './crew-componets/Crewcarousel';

export default function Crew() {
  const body = document.querySelector("body");
  let {url, path} = useRouteMatch();
  const [crewData, setCrewData] = useState([{}]);
  const [isMobile, setIsMobile] = useState(false);



  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }  
  }
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  },);

  useEffect(() => {
    axios.get("./data.json").then(res => {
      setCrewData(res.data.crew);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <div>
      <main className='Crew'>
        <section className='Crew-section'>
          <div className='container'>
            <Crewcarousel crew={crewData}/> 
          </div>
        </section>
      </main>       
    </div>
  )
}


{/* <main className="Crew">
        <section className="Crew-section">
          <div className="container">
            <div className="Crew-heading">
              <h6><b>02</b>MEET YOUR CREW</h6>
              <img src={crewImage} alt="" className="Crew-image"></img>
            </div>
            <div className="Crew-description">
              <Crewcarousel crew={crewData}></Crewcarousel>
            </div>
          </div>
        </section>
      </main>  */}
