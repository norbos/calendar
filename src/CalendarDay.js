import PropTypes from "prop-types";

const CalendarDay = ({ date, onRequestAddEvent, onRequestGetEvents }) =>
  date === 0 ? (
    <td style={{ backgroundColor: "gray" }} />
  ) : (
    <td style={{ textAlign: "center" }}>
      {date.getDate()}
      <br />
      <button
        type="button"
        style={{ color: "red" }}
        onClick={() => onRequestAddEvent(date)}
      >
        +
      </button>
      <button
        type="button"
        style={{ color: "green" }}
        onClick={() => onRequestGetEvents(date)}
      >
        ...
      </button>
    </td>
  );

CalendarDay.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onRequestAddEvent: PropTypes.func.isRequired,
  onRequestGetEvents: PropTypes.func.isRequired,
};

export default CalendarDay;
