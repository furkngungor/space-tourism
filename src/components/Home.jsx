import React from 'react';
import {Link} from "react-router-dom";
import "../style/home.css";

export default function Home() {
  return (
    <div>
      <main>
        <section className="Home-main-section">
          <div className="container">
            <div className="Home-main-section-content">
              <h3>SO, YOU WANT TO TRAVEL TO</h3>
              <h1>SPACE</h1>
              <p>
                Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!
              </p>
            </div>
            <div className="Home-section-explore">
              <Link to="/destination" >
                EXPLORE
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
