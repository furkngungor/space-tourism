import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "../style/header.css";
// Navbar Images
import logo from "../assets/shared/logo.svg";
import hamburgerButton from "../assets/shared/icon-hamburger.svg";
import closeButton from "../assets/shared/icon-close.svg";



export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  
  
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  
  document.querySelector("body").onload = () => {
    handleResize();
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  },);

  function openMenu() {
    document.getElementsByClassName("Header-menu")[0].classList.add("show-menu");
    document.getElementsByClassName("Header-hamburger-button")[0].style.display = "none";
  }

  function closeMenu() {
    document.getElementsByClassName("Header-menu")[0].classList.remove("show-menu");
    document.getElementsByClassName("Header-hamburger-button")[0].style.display = "flex";
  }

  
  function setClick(event) {
    const navLinks = document.querySelectorAll(".Header-menu-link");
    for (let index = 0; index < navLinks.length; index++) {
      navLinks[index].classList.remove("active");
    }
    event.target.classList.add("active");
    if (isMobile) {
      closeMenu();
    }
  }

  return (
    <div>
      <header className="Header">
        <div className="container">
          <Link to="/" className='Header-logo'>
            <img src={logo} alt=""></img>
          </Link> 
          <hr></hr>
          <button className="Header-hamburger-button" onClick={openMenu}>
            <img src={hamburgerButton} alt=""></img>
          </button>
          <div className="Header-menu">
            <button className="Header-close-button" onClick={closeMenu}>
              <img src={closeButton} alt=""></img>
            </button>
            <Link to="/" className="Header-menu-link active" onClick={setClick}>Home</Link>
            <Link to="/destination" className="Header-menu-link" onClick={setClick}>Destination</Link>
            <Link to="/crew" className="Header-menu-link" onClick={setClick}>Crew</Link>
            <Link to="/technology" className="Header-menu-link" onClick={setClick}>Technology</Link>
          </div>
        </div>
      </header>
    </div>
  )
}
