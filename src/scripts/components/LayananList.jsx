import React, { useState, useEffect } from "react";
import "@styles/layanan-list.css";
import layanansData from "@data/layanan/layanan.json";

const LayananList = () => {
  const [layanans, setLayanans] = useState([]);

  useEffect(() => {
    setLayanans(layanansData);
  }, []);

  return (
    <div className="layanan">
      <div className="layanan-list">
        <h2>Pilih layanan konsultasi yang membuatmu nyaman dan tenang</h2>
        <div className="layanan-list__card">
          {layanans.map((layanan) => (
            <div className="layanan-card" key={layanan.id}>
              <img className="layanan-image" src={layanan.image} alt={layanan.title} />
              <h3 className="layanan-title">{layanan.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LayananList;
