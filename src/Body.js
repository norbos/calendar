import CalendarDay from "./CalendarDay";
import { connect } from "react-redux";

const Body = (props) => {
    var iterDate = new Date(props.year, props.month, 1);
    iterDate.setHours(0, 0, 0, 0);
    var currentMonth = props.month;

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
                        <CalendarDay date={date} onRequestAddEvent={props.onRequestAddEvent} onRequestGetEvents={props.onRequestGetEvents} />
                    )}
                </tr>)
            }
        </tbody>
    );
  }

  function mapStateToProps(state) {
    return {
      month: state.month,
      year: state.year
    };
  }
  

  export default connect(mapStateToProps)(Body);
  
  