import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Calendarr() {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };
  return (
    <div>
      <Calendar onChange={onChange} value={date} />
      <h2>{date.toString()}</h2>
    </div>
  );
}
