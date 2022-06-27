import Header from "./Header";
import Body from "./Body";
import AddEvent from "./AddEvent";
import { useState } from 'react';

function Calendar() {
  const [events, setEvents] = useState([]);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [currentDate, setCurrentDate] = useState();

  const addEvent = (calendarEvent) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newEvent = { id, ...calendarEvent };

    setEvents([...events, newEvent]);
  }

  const requestAddEvent = (date) => {
    setShowAddEvent(true);
    setCurrentDate(date);
  }

  const onEventAddSuccess = () => {
    setShowAddEvent(false);
  }

  const getEvents = (date) => {
    return events.filter(e => e.date === date);
  }

  return (
    <div>
      <table className="table">
        <Header />
        <Body onRequestAddEvent={requestAddEvent} onGetEvents={getEvents} />
      </table>
      {
        showAddEvent &&
        <div>
          <AddEvent onAdd={addEvent} onEventAddSuccess={onEventAddSuccess} date={currentDate}/>
        </div>
      }
      
    </div>
  );
}

export default Calendar;
