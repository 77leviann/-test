import React, { useState, useEffect } from "react";
import "@styles/step-list.css";
import stepsData from "@data/step/step.json";

const StepList = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    setSteps(stepsData);
  }, []);

  return (
    <div className="step">
      <div className="step-list">
        <h3>4 Langkah Mudah Melakukan Konsultasi</h3>
        <div className="step-list__card">
          {steps.map((step) => (
            <div className="step-card" key={step.id}>
            <h3 className="step-id">{step.id}</h3>
              <img className="step-image" src={step.image} alt={step.title} />
              <h5 className="step-title">{step.title}</h5>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepList;