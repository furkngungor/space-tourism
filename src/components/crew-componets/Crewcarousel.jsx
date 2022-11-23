import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../../style/crew.css";
import image1 from "../../assets/crew/image-douglas-hurley.png";
import image2 from "../../assets/crew/image-mark-shuttleworth.png";
import image3 from "../../assets/crew/image-victor-glover.png";
import image4 from "../../assets/crew/image-anousheh-ansari.png";

export default function Crewcarousel({crew}) {
  function imgSrc(index) {
    if (index === 0) {
      return image1;
    } else if (index === 1) {
      return image2;
    } else if (index === 2) {
      return image3;
    } else if (index === 3) {
      return image4;
    }
  }
  return (
    <div>
      <h6><b>02</b>MEET YOUR CREW</h6>
      <Carousel className='Crew-carousel' showStatus={false} showArrows={false}
       useKeyboardArrows={true} swipeable={true} autoFocus={true} showThumbs={false}
       emulateTouch={true} autoPlay={true} infiniteLoop={true} >
        {
          crew.map((element, index) => {
            return (
              <div className='Crew-carousel-item' key={index}>
                <div className='Crew-heading'>
                  <img src={imgSrc(index)} className="Crew-image" alt=""></img>
                </div>
                <div className='Crew-description'>
                  <h4>{element.role}</h4>
                  <h2>{element.name}</h2>
                  <p>
                    {element.bio}
                  </p>
                </div>
              </div>
            )
          })
        }
      </Carousel>
    </div>  
  )
}

