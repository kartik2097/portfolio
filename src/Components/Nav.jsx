import React, { useState } from "react";
import "../Components/CSS/Nav.css";
import logo from "../Images/logo.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const openNav = () => {
    setNavbar(!navbar);
  };
  return (
    <>
      
        <div className={navbar ? 'overlay active': 'overlay'}>
        <button className="closebtn"  onClick={openNav}>
          &times;
        </button>
        <div className="overlay-content">
          <NavLink to="/" onClick={openNav} id="hm">Home<span className="navback" id="home">Home</span></NavLink>
          <NavLink to="/about" onClick={openNav} id="ab">About<span className="navback" id="about">About</span></NavLink>
          <NavLink to="/skill" onClick={openNav} id="sk">Skill<span className="navback" id="skill">Skill</span></NavLink>
          <NavLink to="/work" onClick={openNav} id="wk">Work<span className="navback" id="work">Work</span></NavLink>
          <NavLink to="/contact" onClick={openNav} id="co">Contact<span className="navback" id="contact">Contact</span></NavLink>
        </div>
      </div>
      <span className={navbar ? 'bar nobar': 'bar'} onClick={openNav}>
        &#9776;</span>
        <span className="logo">
        <NavLink to="/"> <img src={logo} alt={logo}/></NavLink> 
        </span>
    </>
  );
};

export default Nav;
