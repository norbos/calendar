import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import CalendarDay from "./CalendarDay";

const Body = ({ onRequestAddEvent, onRequestGetEvents }) => {
  const state = useSelector((s) => s);

  const iterDate = new Date(state.year, state.month, 1);
  iterDate.setHours(0, 0, 0, 0);
  const currentMonth = state.month;

  const grid = [];

  while (iterDate.getMonth() === currentMonth) {
    const currentWeek = [];

    for (let i = 0; i < 7; i++) {
      if (iterDate.getDay() !== i || iterDate.getMonth() !== currentMonth) {
        currentWeek.push(0);
      } else {
        currentWeek.push(new Date(iterDate));
        iterDate.setDate(iterDate.getDate() + 1);
      }
    }

    grid.push(currentWeek);
  }

  return (
    <tbody>
      {grid.map((week) => (
        <tr>
          {week.map((date) => (
            <CalendarDay
              date={date}
              onRequestAddEvent={onRequestAddEvent}
              onRequestGetEvents={onRequestGetEvents}
            />
          ))}
        </tr>
      ))}
    </tbody>
  );
};

Body.propTypes = {
  onRequestAddEvent: PropTypes.func.isRequired,
  onRequestGetEvents: PropTypes.func.isRequired,
};

export default Body;
