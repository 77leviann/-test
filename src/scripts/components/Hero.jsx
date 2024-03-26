import React from 'react';
import landingImage from '@assets/hero-image.png'
import "@styles/hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h3 className="hero-title">Bersama dan berdampingan menciptakan hubungan yang sehat di seluruh dunia</h3>
        <p className="hero-desc">Bercerita dan berbagi rasa, Tenangkan hati dan tenangkan diri</p>
        <button className="start-note" id="startNoteBtn">Mulai Konsultasi</button>
      </div>
      <div className="hero-image">
        <img src={landingImage} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
