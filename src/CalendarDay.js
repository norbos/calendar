
const CalendarDay = ({day}) => {
    return (
        day === 0 ?
            <td style={{ backgroundColor: "gray" }}></td>
            :
            <td style={{ textAlign: "center" }}>{day}</td>
    );
  }
  
  export default CalendarDay;