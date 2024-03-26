import React, { useState, useEffect, useRef } from "react";
import "@styles/testimoni-list.css";
import testimonisData from "@data/testimoni/testimoni.json";

const TestimoniList = () => {
  const [testimonis, setTestimonis] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    setTestimonis(testimonisData);
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
    <div className="testimoni">
      <div className="testimoni-list">
        <h2>Testimoni mereka yang telah menggunakan afeksi</h2>
        <div
          className="testimoni-list__container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="testimoni-list__wrapper"
            ref={scrollRef}
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {testimonis.map((testimoni) => (
              <div className="testimoni-card" key={testimoni.id}>
                <img
                  className="testimoni-image"
                  src={testimoni.image}
                  alt={testimoni.name}
                />
                <h5 className="testimoni-title">{testimoni.testimony}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimoniList;
