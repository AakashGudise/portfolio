// import'./menu.component.css'
// import React from "react"
// import { Envelope, Facebook, FileEarmark, HddStack, House, HouseDoor, Instagram, LayoutTextWindow, Linkedin, Mailbox2, MenuButton, Person, Phone, Skype, Twitter } from "react-bootstrap-icons"
// import profile from "../../assets/images/profile-img.jpg";
// import myImg_1 from '../../assets/images/myimages/aboutimg.png'
// import { Link } from 'react-router-dom';

// export function MenuComponent() {
//     return (
//         <div>
//             {/* <!-- ======= Header ======= --> */}
//             <header id="header" className='header navbarnavbar-expand-lg'>
//                 <div className="d-flex flex-column">

//                     <div className="profile">
//                         <img src={myImg_1} alt="" className="img-fluid rounded-circle" />
//                         <h1 className="text-light"><a href="index.html">G Aakash</a></h1>
//                         <div className="social-links mt-3 text-center">
//                             <a><Twitter className='social-icons'></Twitter></a>
//                             <a><Facebook className='social-icons'></Facebook></a>
//                             <a><Instagram className='social-icons'></Instagram></a>
//                             <a><Skype className='social-icons'></Skype></a>
//                             <a><Linkedin className='social-icons'></Linkedin></a>
//                         </div>
//                     </div>

//                     <nav id="navbar" className="nav-menu navbar">
//                         <ul>
//                             {/* <Link to='/admin'> */}
//                             <li><a href="#hero" className="nav-link scrollto active"><HouseDoor></HouseDoor> <span>Home</span></a></li>
//                             {/* </Link> */}
//                             <li><a href="#about" className="nav-link scrollto"><Person></Person> <span>About</span></a></li>
//                             <li><a href="#resume" className="nav-link scrollto"><FileEarmark></FileEarmark> <span>Resume</span></a></li>
//                             <li><a href="#portfolio" className="nav-link scrollto"><LayoutTextWindow></LayoutTextWindow> <span>Portfolio</span></a></li>
//                             <li><a href="#services" className="nav-link scrollto"><HddStack></HddStack>  <span>Services</span></a></li>
//                             <li><a href="#contact" className="nav-link scrollto"><Envelope></Envelope><span>Contact</span></a></li>
//                         </ul>
//                     </nav>


//                 </div>
//             </header>
//         </div>
//     )
// }




import './menu.component1.0.css'
import React, { useState } from "react";
import {
  Envelope,
  Facebook,
  FileEarmark,
  HddStack,
  HouseDoor,
  Instagram,
  Linkedin,
  Person,
  Twitter,
} from "react-bootstrap-icons";
import myImg_1 from "../../assets/images/myimages/aboutimg.png";
import "./menu.component.css";

export function MenuComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* <!-- ======= Header ======= --> */}
      <header
        id="header"
        className={`header navbarnavbar-expand-lg ${isMobileMenuOpen ? "mobile-nav-active" : ""}`}
      >
        <div className="d-flex flex-column">
          <div className="profile">
            <img src={myImg_1} alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light">
              <a href="index.html">G Aakash</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="#"><Twitter className="social-icons" /></a>
              <a href="#"><Facebook className="social-icons" /></a>
              <a href="https://www.instagram.com/aakash.126999/?__pwa=1"><Instagram className="social-icons" /></a>
              <a href="http://www.linkedin.com/in/aakash-gudise"><Linkedin className="social-icons" /></a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active">
                  <HouseDoor /> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <Person /> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <FileEarmark /> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="nav-link scrollto">
                  <HddStack /> <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link scrollto">
                  <HddStack /> <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link scrollto">
                  <Envelope /> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Toggle */}
      <button className="mobile-nav-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? "✖" : "☰"}
      </button>
    </div>
  );
}
