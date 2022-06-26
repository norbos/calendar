
function Header() {

    var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <thead>
            <tr>
                {
                    weekDays.map(day => <th>{day}</th>)
                }
            </tr>
        </thead>
    );
  }
  
  export default Header;
  