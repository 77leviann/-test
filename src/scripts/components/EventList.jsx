import React, { useState, useEffect } from "react";
import "@styles/event-list.css";
import eventsData from "@data/event/event.json";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  return (
    <div className="event">
      <div className="event-list">
        <h2>Ikuti Kegiatan yang sedang berlangsung</h2>
        <div className="event-list__card">
          {events.map((event) => (
            <div className="event-card" key={event.id}>
              <img className="event-image" src={event.image} alt={event.title} />
              <h3 className="event-title">{event.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventList;
