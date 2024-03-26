import React, { useState, useEffect } from "react";
import "@styles/kerjasama-list.css";
import kerjasamasData from "@data/kerjasama/kerjasama.json";

const KerjasamaList = () => {
  const [kerjasamas, setKerjasamas] = useState([]);

  useEffect(() => {
    setKerjasamas(kerjasamasData);
  }, []);

  return (
    <div className="kerjasama">
      <div className="kerjasama-list">
        <h2>Telah Bekerjasama Dengan:</h2>
        <div className="kerjasama-list__card">
          {kerjasamas.map((kerjasama) => (
            <div className="kerjasama-card" key={kerjasama.id}>
              <img className="kerjasama-image" src={kerjasama.image} alt={kerjasama.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KerjasamaList;