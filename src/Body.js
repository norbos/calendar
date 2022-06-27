import CalendarDay from "./CalendarDay";

const Body = ({ onAddEvent, onGetEvents }) => {

    var currenDate = new Date();
    var iterDate = new Date(currenDate.getFullYear(), currenDate.getMonth(), 1);
    iterDate.setHours(0, 0, 0, 0);
    var currentMonth = currenDate.getMonth();

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
            {
                grid.map(week => 
                <tr>
                    {
                    week.map(date => 
                        <CalendarDay date={date} onAddEvent={onAddEvent} onGetEvents={onGetEvents} />
                    )}
                </tr>)
            }
        </tbody>
    );
  }
  
  export default Body;
  