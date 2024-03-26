import React, { useState, useEffect, useRef } from "react";
import "@styles/psikolog-list.css";
import psikologsData from "@data/psikolog/psikolog.json";

const PsikologList = () => {
  const [psikologs, setPsikologs] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    setPsikologs(psikologsData);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    const touchMoveX = e.touches[0].clientX;
    const diffX = touchMoveX - touchStartX.current;
    setScrollPosition(scrollPosition - diffX);
    touchStartX.current = touchMoveX;
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
  };

  return (
    <div className="psikolog">
      <div className="psikolog-list">
        <h2>Profil Psikolog</h2>
        <div
          className="psikolog-list__container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="psikolog-list__wrapper"
            ref={scrollRef}
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {psikologs.map((psikolog) => (
              <div className="psikolog-card" key={psikolog.id}>
                <img
                  className="psikolog-image"
                  src={psikolog.image}
                  alt={psikolog.title}
                />
                <h5 className="psikolog-title">{psikolog.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsikologList;
