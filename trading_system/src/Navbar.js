import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
   
      <nav className="main-nav">
        {/* 1st logo part  */} <NavLink to="/">
        <div className="logo">
          <h2>
            <span>T</span>rading
            <span>A</span>pp
          </h2>
        </div></NavLink>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            {/* <li>
              <NavLink to="/">Home</NavLink>
            </li> */}
           
            <li >
              <NavLink to="/WatchlistHome">WatchList</NavLink>
            </li>
           
            <li style={{color:""}}>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            
            {/* <li>
              <NavLink to="/Login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/Createacc">Create Account</NavLink>
            </li> */}
 <li style={{color:""}}>
              <NavLink to="/about">About</NavLink>
            </li>
            <li style={{color:""}}>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.facebook.com/"
               >
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                >
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
               href="https://www.youtube.com/"
               >
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">

      </section> */}
    </>
  );
};

export default Navbar;