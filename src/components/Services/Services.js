// import React from "react";
import ServiceBox from "../ServiceBox/ServiceBox";
import services from "../../data/services";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <section id="services">
          <div>
            <h1 className="services_heading">Czym zajmuje się nasza firma ?</h1>
          </div>
          <div className="services_options">
            {services.map((service, index) => (
              <ServiceBox
                key={index}
                title={service.title}
                description={service.description}
                isNew={service.isNew}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
