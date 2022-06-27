
const CalendarDay = ({date, onRequestAddEvent, onGetEvents}) => {
    return (
        date === 0 ?
            <td style={{ backgroundColor: "gray" }}></td>
            :
            <td style={{ textAlign: "center" }}>
                {date.getDate()}
                <br></br>
                <button style={{ color: "red" }} onClick={() => onRequestAddEvent(date)}>+</button>
                <button style={{ color: "green" }}>...</button>
            </td>
    );
  }
  
  export default CalendarDay;