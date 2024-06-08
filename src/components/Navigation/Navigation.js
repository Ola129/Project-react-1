// import React from "react";
import "./Navigation.css";

const Navigation = () => (
  <nav className="nav">
    <div className="container">
      <span className="nav_left significant_text">Moja firma</span>
      <div className="nav_right">
        <span className="nav_right">
          <a className="link_nav" href="#middle_container">
            O nas
          </a>
        </span>
        <span className="nav_right">
          <a className="link_nav" href="#services">
            Oferta
          </a>
        </span>
        <span className="nav_right not_allowed disabled">Kontakt</span>
      </div>
    </div>
  </nav>
);

export default Navigation;
