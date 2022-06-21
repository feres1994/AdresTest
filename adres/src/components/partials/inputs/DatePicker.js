import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerInput({ label, getInputValue,name }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  function setDate(date) {
    setSelectedDate(date);
    getInputValue(name,date);
  }
  return (
    <>
      <label className="text-bold">{label}</label>
      <DatePicker selected={selectedDate} onChange={(date) => setDate(date)} />
    </>
  );
}
