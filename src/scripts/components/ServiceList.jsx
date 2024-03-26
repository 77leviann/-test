import React, { useState, useEffect } from "react";
import "@styles/service-list.css";
import servicesData from "@data/service/service.json";

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(servicesData);
  }, []);

  return (
    <div className="service">
      <div className="service-list">
        <h3>Pilih Layanan konsultasi yang membuatmu nyaman dan tenang</h3>
        <div className="service-list__card">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <img className="service-image" src={service.image} alt={service.title} />
              <h5 className="service-title">{service.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
