  import React from "react";
  import Navigation from "./components/Navigation/Navigation";
  import Footer from "./components/Footer/Footer";
  import Header from "./components/Header/Header";
  import Services from "./components/Services/Services";
  import Experts from "./components/Experts/Experts";

  import "./styles/Reset.css";
  import "./styles/App.css";

  const App = () => {
    return (
      <div id="root">
        <header>
          <Navigation />
          <Header />
        </header>
        <main>
          <Experts />
          <Services />
          <footer>
            <Footer />
          </footer>
        </main>
      </div>
    );
  };

  export default App;
