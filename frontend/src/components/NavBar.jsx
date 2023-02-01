import React, { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-container">
      <nav className="NavBar">
        <img
          className="profil_logo"
          alt="Logo profil"
          src="src/assets/profil_logo.png"
        />
        {open && (
          <div className="link">
            <Link to="/home" className="home">
              Home
            </Link>
            <Link to="/history" className="home">
              Mon histoire
            </Link>
          </div>
        )}
        <div className="hamburger-menu">
          <Hamburger
            toggled={open}
            toggle={setOpen}
            color="white"
            onClick={() => setOpen(!open)}
          />
        </div>
      </nav>
    </div>
  );
}
