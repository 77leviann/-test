import React, { useState, useEffect, useRef } from "react";
import "@styles/psychologist-list.css";
import psychologistsData from "@data/psychologist/psychologist.json";

const PsychologistList = () => {
  const [psychologists, setPsychologists] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    setPsychologists(psychologistsData);
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
    <div className="psychologist">
      <div className="psychologist-list">
        <h3>Profil psychologist</h3>
        <div
          className="psychologist-list__container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="psychologist-list__wrapper"
            ref={scrollRef}
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {psychologists.map((psychologist) => (
              <div className="psychologist-card" key={psychologist.id}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    className="psychologist-image"
                    src={psychologist.image}
                    alt={psychologist.name}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsychologistList;
