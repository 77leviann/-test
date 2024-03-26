import React, { useState, useEffect } from "react";
import "@styles/partner-list.css";
import partnersData from "@data/partner/partner.json";

const PartnerList = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    setPartners(partnersData);
  }, []);

  return (
    <div className="partner">
      <div className="partner-list">
        <h3>Telah Berkerjasama Dengan:</h3>
        <div className="partner-list__card">
          {partners.map((partner) => (
            <div className="partner-card" key={partner.id}>
              <img className="partner-image" src={partner.image} alt={partner.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerList;