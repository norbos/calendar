import PropTypes from "prop-types";

const EventsList = ({ date, events, onListClose }) => (
  <div>
    <h4>{date.toLocaleDateString()}</h4>
    {events.length === 0 ? (
      <h5>No events</h5>
    ) : (
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Start Time</th>
            <th style={{ textAlign: "center" }}>End Time</th>
            <th style={{ textAlign: "center" }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {events.map((e) => (
            <tr>
              <td style={{ textAlign: "center" }}>{e.name}</td>
              <td style={{ textAlign: "center" }}>{e.startTime}</td>
              <td style={{ textAlign: "center" }}>{e.endTime}</td>
              <td style={{ textAlign: "center" }}>{e.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}

    <button type="button" className="btn" onClick={onListClose}>
      Close
    </button>
  </div>
);

EventsList.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  events: PropTypes.arrayOf(Object).isRequired,
  onListClose: PropTypes.func.isRequired,
};

export default EventsList;
