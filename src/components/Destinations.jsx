import React, {useState, useEffect}  from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  useRouteMatch, 
  useParams,
  Link
} from "react-router-dom";
import axios from "axios";
// Body Background Images

// Content Images
import moonImage from "../assets/destination/image-moon.png";
import marsImage from "../assets/destination/image-mars.png";
import europaImage from "../assets/destination/image-europa.png";
import titanImage from "../assets/destination/image-titan.png";
import "../style/destination.css";
import Decontent from "./destination-components/Decontent";
import Deimage from './destination-components/Deimage';


export default function Destinations() {
  let {url, path} = useRouteMatch();
  const [destination, setDestination] = useState([{}]);
  
  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/furkngungor/space-tourism/gh-pages/data.json").then(res => {
      setDestination(res.data.destinations);
    }).catch(err => {
      console.log(err);
    });
  },[]);

  function setClick(event) {
    const destLinks = document.querySelectorAll(".Destination-navigation-button");
    for (let index = 0; index < destLinks.length; index++) {
      destLinks[index].classList.remove("active");
    }
    event.target.classList.add("active");
  }
  
  return (
    <div>
      <main className="Main">
        <section className="Destination">
          <div className="container">
            <Router>
              <div className="Destination-planet">
              <Switch>
                  <Route path={path + "/mars"}>
                    <Deimage img={marsImage}></Deimage>
                  </Route>
                  <Route path={path + "/europa"}>
                    <Deimage img={europaImage}></Deimage>
                  </Route>
                  <Route path={path + "/titan"}>
                    <Deimage img={titanImage}></Deimage>
                  </Route>
                  <Route path={path}>
                    <Deimage img={moonImage}></Deimage>
                  </Route>
              </Switch>
              </div>
              <div className="Destination-planet-content">
                <nav className="Destination-navigation">
                  <Link to={path} className="Destination-navigation-button active" onClick={setClick}>MOON</Link>
                  <Link to={path + "/mars"} className="Destination-navigation-button" onClick={setClick}>MARS</Link>
                  <Link to={path + "/europa"} className="Destination-navigation-button" onClick={setClick}>EUROPA</Link>
                  <Link to={path + "/titan"} className="Destination-navigation-button" onClick={setClick}>TITAN</Link>
                </nav>
                <Switch>
                  <Route path={path + "/mars"}>
                    <Decontent content={destination[1]}></Decontent>
                  </Route>
                  <Route path={path + "/europa"}>
                    <Decontent content={destination[2]}></Decontent>
                  </Route>
                  <Route path={path + "/titan"}>
                    <Decontent content={destination[3]}></Decontent>
                  </Route>
                  <Route path={path}>
                    <Decontent content={destination[0]}></Decontent>
                  </Route>
                </Switch>
              </div>
            </Router>  
          </div>       
        </section>    
      </main>
    </div>
  )
}
