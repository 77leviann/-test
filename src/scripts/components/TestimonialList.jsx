import React, { useState, useEffect, useRef } from "react";
import "@styles/testimonial-list.css";
import testimonialsData from "@data/testimonial/testimonial.json";

const TestimonialList = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    setTestimonials(testimonialsData);
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
    <div className="testimonial">
      <div className="testimonial-list">
        <h3>Testimonial mereka yang telah menggunakan afeksi</h3>
        <div
          className="testimonial-list__container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="testimonial-list__wrapper"
            ref={scrollRef}
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                <img
                  className="testimonial-image"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <p className="testimonial-title">{testimonial.testimony}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialList;
