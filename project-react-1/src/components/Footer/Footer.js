import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p className="footer_left">
        Nazwa firmy - wszelkie prawa zastrzeżone, 2024
      </p>
      <span className="footer_right">
        <FontAwesomeIcon className="icons" icon={faFacebook} />
        <FontAwesomeIcon className="icons" icon={faInstagram} />
      </span>
    </div>
  </footer>
);

export default Footer;
