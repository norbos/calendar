import Header from "./Header";
import Body from "./Body";
import { useState } from 'react';

function Calendar() {
  const [events, setEvents] = useState([]);

  const addEvent = (calendarEvent) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newEvent = { id, ...calendarEvent };

    setEvents([...events, newEvent]);
  }

  const getEvents = (date) => {
    return events.filter(e => e.date === date);
  }

  return (
    <div>
      <table className="table">
        <Header />
        <Body onAddEvent={addEvent} onGetEvents={getEvents} />
      </table>
    </div>
  );
}

export default Calendar;
