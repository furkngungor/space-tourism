import React, {useState, useEffect} from 'react';
import axios from "axios";
import "../style/crew.css";
import Crewcarousel from './crew-componets/Crewcarousel';

export default function Crew() {
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
    axios.get("https://raw.githubusercontent.com/furkngungor/space-tourism/gh-pages/data.json").then(res => {
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
