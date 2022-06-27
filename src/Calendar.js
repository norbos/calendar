import Header from "./Header";
import Body from "./Body";
import AddEvent from "./AddEvent";
import { useState } from 'react';
import EventsList from "./EventsList";

function Calendar() {
  const [events, setEvents] = useState([]);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [showEventsList, setShowEventsList] = useState(false);
  const [currentDate, setCurrentDate] = useState();
  const [currentListDate, setCurrentListDate] = useState();

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

  const onRequestGetEvents = (date) => {
    setShowEventsList(true);
    setCurrentListDate(date);
  }

  return (
    <div>
      <table className="table">
        <Header />
        <Body onRequestAddEvent={requestAddEvent} onRequestGetEvents={onRequestGetEvents} />
      </table>
      {
        <div>
          { showAddEvent &&  <AddEvent onAdd={addEvent} onEventAddSuccess={onEventAddSuccess} date={currentDate}/>}
          { showEventsList && <EventsList date={currentListDate} events={events.filter(e => e.date.getTime() === currentListDate.getTime())} /> }
        </div>
      }
      
    </div>
  );
}

export default Calendar;
