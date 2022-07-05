import { useState } from "react";

const AddEvent = ({ date, onAdd, onEventAddSuccess, onAddCancel }) => {
  const [name, setName] = useState("");
  const [interalDate] = useState(date);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please add event name");
      return;
    }

    if (!startTime) {
      alert("Please add start time");
      return;
    }

    if (!endTime) {
      alert("Please add end time");
      return;
    }

    onAdd({ date: interalDate, name, startTime, endTime, description });
    onEventAddSuccess();

    setName("");
    setStartTime("");
    setEndTime("");

    setDescription("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          placeholder="Event Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Start Time</label>
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>End Time</label>
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Description</label>
        <input
          type="text"
          placeholder="Add Description (Optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <input type="submit" value="Add Event" className="btn" />
      <input
        type="button"
        value="Cancel"
        className="btn"
        onClick={onAddCancel}
      />
    </form>
  );
};

export default AddEvent;
