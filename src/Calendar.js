import Header from "./Header";
import Body from "./Body";

function Calendar() {
  return (
    <div>
      <table className="table">
        <Header />
        <Body />
      </table>
    </div>
  );
}

export default Calendar;
