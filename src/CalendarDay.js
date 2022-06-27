
const CalendarDay = ({date, onRequestAddEvent, onRequestGetEvents}) => {
    return (
        date === 0 ?
            <td style={{ backgroundColor: "gray" }}></td>
            :
            <td style={{ textAlign: "center" }}>
                {date.getDate()}
                <br></br>
                <button style={{ color: "red" }} onClick={() => onRequestAddEvent(date)}>+</button>
                <button style={{ color: "green" }} onClick={() => onRequestGetEvents(date)}>...</button>
            </td>
    );
  }
  
  export default CalendarDay;