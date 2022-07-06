import PropTypes from "prop-types";
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
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            placeholder="Event Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="startTime">
          Start Time
          <input
            type="time"
            id="startTime"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="endTime">
          End Time
          <input
            type="time"
            id="endTime"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="description">
          Description
          <input
            type="text"
            id="description"
            placeholder="Add Description (Optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
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

AddEvent.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onAdd: PropTypes.func.isRequired,
  onAddCancel: PropTypes.func.isRequired,
  onEventAddSuccess: PropTypes.func.isRequired,
};

export default AddEvent;
