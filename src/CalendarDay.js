
const CalendarDay = ({date}) => {
    return (
        date === 0 ?
            <td style={{ backgroundColor: "gray" }}></td>
            :
            <td style={{ textAlign: "center" }}>
                {date.getDate()}
                <br></br>
                <button style={{ color: "red" }}>+</button>
                <button style={{ color: "green" }}>...</button>
            </td>
    );
  }
  
  export default CalendarDay;