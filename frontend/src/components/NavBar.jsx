import React, { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-container">
      <nav className="NavBar">
        <a href="../pages/login">
          <img
            className="profil_logo"
            alt="Logo profil"
            src="src/assets/profil_logo.png"
          />
        </a>
        {open && (
          <div className="link">
            <Link to="/" className="home">
              Home
            </Link>
            <Link to="/histoire" className="reseaux">
              Mon histoire
            </Link>
            <Link to="/reseaux" className="reseaux">
              Mes Reseaux
            </Link>
            <Link to="/login" className="login">
              Login
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
