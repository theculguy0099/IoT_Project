import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

import logoImage from '../images/wheelchairlogo.png';

function Header() {
  const [top, setTop] = useState(true);
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState("");
  
  const basePath = import.meta.env.BASE_URL;
  
  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const data = {
        showall: false,
      };
      if (localStorage.getItem("userType") == "recruiter") {
        axios
          .post("http://localhost:4000/auth/recruiter", data, {
            headers: { "x-access-token": localStorage.getItem("token") },
          })
          .then((res) => {
            if (res.status === 200) {
              setSignedIn(true);
              setUser(res.data.email);
            }
          })
          .catch((err) => {
            localStorage.clear();
          });
      } else if (localStorage.getItem("userType") == "student") {
        axios
          .post("http://localhost:4000/auth/student", data, {
            headers: { "x-access-token": localStorage.getItem("token") },
          })
          .then((res) => {
            if (res.status === 200) {
              setSignedIn(true);
              setUser(res.data.email);
            }
          })
          .catch((err) => {
            localStorage.clear();
          });
      }
    }
  }, []);
  const handleSignOut = () => {
    localStorage.clear();
    setSignedIn(false);
    setUser("");
  };
  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to={basePath} className="block" aria-label="Cruip">
              <img src={logoImage} width="80" className="d-inline-block align-top" alt="Wheel chair logo "></img>
            </Link>
          </div>

          <Link to={basePath} className="block" aria-label="Cruip">
            <div className="text-center text-xl md:text-5xl font-extrabold tracking-tighter
              bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400
              hover:from-green-400 hover:to-blue-500"
            >
              IoT Project   
            </div>
          </Link>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li><Link to={`${basePath}/heartrate`}>About project</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;