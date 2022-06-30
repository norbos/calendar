import Header from "./Header";
import Body from "./Body";
import AddEvent from "./AddEvent";
import { useState } from "react";
import EventsList from "./EventsList";
import { connect } from "react-redux";
import * as dateActions from "./redux/actions/dateActions";
import { bindActionCreators } from "redux";

function Calendar(props) {
  const [events, setEvents] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [showEventsList, setShowEventsList] = useState(false);
  const [currentDate, setCurrentDate] = useState();
  const [currentListDate, setCurrentListDate] = useState();

  const displayMonths = ["January", "February", "March", "April", 
                         "May", "June", "July", "August", 
                         "September", "October", "November", "December"];

  const addEvent = (calendarEvent) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newEvent = { id, ...calendarEvent };

    setEvents([...events, newEvent]);
  }

  const requestAddEvent = (date) => {
    setShowAddEvent(true);
    setCurrentDate(date);
    setDisabled(true);
  }

  const onEventAddSuccess = () => {
    setShowAddEvent(false);
    setDisabled(false);
  }

  const onAddCancel = () => {
    setShowAddEvent(false);
    setDisabled(false);
  }

  const onListClose = () => {
    setShowAddEvent(false);
    setShowEventsList(false);
    setDisabled(false);
  }

  const onRequestGetEvents = (date) => {
    setShowEventsList(true);
    setCurrentListDate(date);
    setDisabled(true);
  }

  return (
    <div>
      <div style={{ textAlign:"center" }}>
      <button>Previous</button>
        <h2 style={{ display:"inline-block" }}>{displayMonths[props.month]} {props.year}</h2>
      <button>Next</button>
      </div>
      <table className="table" style={disabled ? {pointerEvents: "none", opacity: "0.4"} : {}}>
        <Header />
        <Body onRequestAddEvent={requestAddEvent} onRequestGetEvents={onRequestGetEvents} />
      </table>
      {
        <div>
          { showAddEvent &&  <AddEvent onAdd={addEvent} onEventAddSuccess={onEventAddSuccess} onAddCancel={onAddCancel} date={currentDate} /> }
          { showEventsList && <EventsList date={currentListDate} events={events.filter(e => e.date.getTime() === currentListDate.getTime())} onListClose={onListClose} /> }
        </div>
      }
      
    </div>
  );
}

function mapStateToProps(state) {
  return {
    month: state.month,
    year: state.year
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dateActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
