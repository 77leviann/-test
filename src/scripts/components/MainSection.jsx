import React from 'react';
import Hero from '@components/Hero';
import EventList from '@components/EventList';
import StepList from '@components/StepList';
import PsychologistList from '@components/PsychologistList';
import ServiceList from '@components/ServiceList';
import TestimonialList from '@components/TestimonialList';
import PartnerList from './PartnerList';

import "@styles/main-section.css";


const MainSection = () => {
  return (
    <div className="main-section">
      <Hero />
      <EventList />
      <StepList />
      <PsychologistList />
      <ServiceList />
      <TestimonialList/>
      <PartnerList />
    </div>
  );
};

export default MainSection;
