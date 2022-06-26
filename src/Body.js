import CalendarDay from "./CalendarDay";

function Body() {

    var currenDate = new Date();
    var iterDate = new Date(currenDate.getFullYear(), currenDate.getMonth(), 1);
    var currentMonth = currenDate.getMonth();

    var grid = [];

    while (iterDate.getMonth() === currentMonth) {
        var currentWeek = [];

        for (let i = 0; i < 7; i++) {
            if (iterDate.getDay() !== i || iterDate.getMonth() !== currentMonth) {
                currentWeek.push(0);
            } else {
                currentWeek.push(iterDate.getDate());
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
                    week.map(day => 
                        <CalendarDay day={day} />
                    )}
                </tr>)
            }
        </tbody>
    );
  }
  
  export default Body;
  