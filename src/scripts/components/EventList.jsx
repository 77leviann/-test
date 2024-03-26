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
        <h3>Ikuti Kegiatan yang sedang berlangsung</h3>
        <div className="event-list__card">
          {events.map((event) => (
            <div className="event-card" key={event.id}>
              <img
                className="event-image"
                src={event.image}
                alt={event.title}
              />
              <a
                href="#"
                className="event-title"
                target="_blank"
                rel="noopener noreferrer"
              >
                {event.title}
              </a>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventList;
