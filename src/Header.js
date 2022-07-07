function Header() {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <thead>
      <tr>
        {weekDays.map((day) => (
          <th style={{ textAlign: "center" }}>{day}</th>
        ))}
      </tr>
    </thead>
  );
}

export default Header;
