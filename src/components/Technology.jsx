import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Link
} from "react-router-dom";
import axios from "axios";
import "../style/technology.css";
// Desktop Image
import launchImage from "../assets/technology/image-launch-vehicle-portrait.jpg";
import capsuleImage from "../assets/technology/image-space-capsule-portrait.jpg";
import portImage from "../assets/technology/image-spaceport-portrait.jpg";
// Mobile Image
import launchMobileImage from "../assets/technology/image-launch-vehicle-landscape.jpg";
import capsuleMobileImage from "../assets/technology/image-space-capsule-landscape.jpg";
import portMobileImage from "../assets/technology/image-spaceport-landscape.jpg";
// Components
import Techcontent from './technology-components/Techcontent';
import Techimage from './technology-components/Techimage';


export default function Technology() {
  let {path} = useRouteMatch();
  const [techData, setTechData] = useState([{}]);
  const [isMobile, setIsMobile] = useState(false);
  

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  },);

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/furkngungor/space-tourism/gh-pages/data.json").then(res => {
      setTechData(res.data.technology);
    }).catch(err => {
      console.log(err);
    });
  }, [])

  function setClick(event) {
    const techLinks = document.querySelectorAll(".Technology-nav-link");
    for (let index = 0; index < techLinks.length; index++) {
      techLinks[index].classList.remove("Technology-nav-active");
    }
    event.target.classList.add("Technology-nav-active");
  }


  return (
    <div>
      <main className="Technology">
        <section className="Technology-section">
          <div className="container">
            <Router>
              <div className="Technology-section-header-and-image">
                <h6><b>03</b>SPACE LAUNCH 101</h6>
                <Switch>
                  <Route path={path + "/3"}>
                    <Techimage image={isMobile ? capsuleMobileImage : capsuleImage}/>
                  </Route>
                  <Route path={path + "/2"}>
                    <Techimage image={isMobile ? portMobileImage : portImage}/>
                  </Route>
                  <Route path={path}>
                    <Techimage image={isMobile ? launchMobileImage : launchImage}/>
                  </Route>
                </Switch>
              </div>
              <div className="Technology-nav">
                <Link to={path} className="Technology-nav-link Technology-nav-active" onClick={setClick}>1</Link>
                <Link to={path + "/2"} className="Technology-nav-link" onClick={setClick}>2</Link>
                <Link to={path + "/3"} className="Technology-nav-link" onClick={setClick}>3</Link>
              </div>
              <div className="Technology-section-description">
                <Switch>
                  <Route path={path + "/3"}>
                    <Techcontent content={techData[2]}/>
                  </Route>
                  <Route path={path + "/2"}>
                    <Techcontent content={techData[1]}/>
                  </Route>
                  <Route path={path}>
                    <Techcontent content={techData[0]}/>
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
