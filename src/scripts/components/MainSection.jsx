import React from 'react';
import Hero from '@components/Hero';
import EventList from '@components/EventList';
import StepList from '@components/StepList';
import PsikologList from '@components/PsikologList';
import LayananList from '@components/LayananList';
import TestimoniList from '@components/TestimoniList';
import KerjasamaList from './KerjasamaList';

import "@styles/main-section.css";


const MainSection = () => {
  return (
    <div className="main-section">
      <Hero />
      <EventList />
      <StepList />
      <PsikologList />
      <LayananList />
      <TestimoniList/>
      <KerjasamaList />
    </div>
  );
};

export default MainSection;
