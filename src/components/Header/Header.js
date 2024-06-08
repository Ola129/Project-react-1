// import React from "react";
import './Header.css';

const Header = () => (
  <header>
    <div className="header">
      <div className="header_shadow">
        <div className="container">
          <section className="header_container">
            <h1 className="title padding_title">
              Nasza firma oferuje najwyższej jakości produkty
            </h1>
            <p className="subtitle text">Nie wierz nam na słowo - sprawdź</p>
            <a className="button text" href="#services">
              Oferta
            </a>
          </section>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
