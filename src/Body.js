import CalendarDay from "./CalendarDay";
import { useSelector } from "react-redux";

const Body = ({ onRequestAddEvent, onRequestGetEvents }) => {
  const state = useSelector((state) => state);

  var iterDate = new Date(state.year, state.month, 1);
  iterDate.setHours(0, 0, 0, 0);
  var currentMonth = state.month;

  var grid = [];

  while (iterDate.getMonth() === currentMonth) {
    var currentWeek = [];

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

export default Body;
