import React, { useState } from "react";
import Input from "../../../components/partials/inputs/input";
import DropDown from "../../../components/partials/inputs/dropDown";
import DatePickerComponent from '../../../components/partials/inputs/datePicker'
import "./index.css";

export default function Index({ filterData }) {
  const options = [
    { name: "option 1", value: "option1" },
    { name: "option 2", value: "option2" },
    { name: "option 3", value: "option3" },
  ];
  const [filter, setFilters] = useState({
  
  });

  function setFilter(key, value) {
   
      setFilters({
        ...filter,
        [key]: value,});
    
  }

  return (
    <div className="row p-3">
      <div className="col-lg-1 col-md-4 ">
        <Input
          label="Employee"
          placeholder="Employee Name"
          getInputValue={(key, value) => setFilter(key, value)}
          name="employeeName"
        />
      </div>

      <div className="col-lg-2 col-md-4 ">
        <DropDown
          options={options}
          name="applicationType"
          label="Application Type"
          getInputValue={(key, value) => setFilter(key, value)}
        />
      </div>
      <div className="col-lg-2 col-md-4 ">
        <DropDown
          options={options}
          name="actionType"
          label="Action Type"
          getInputValue={(key, value) => setFilter(key, value)}
        />
      </div>
      <div className="col-lg-1 col-md-4 ">
      <DatePickerComponent 
        name="fromDate" label="From Date" 
        getInputValue={(key, value) => setFilter(key, value)}

        />      </div>
      <div className="col-lg-1 col-md-4 ">
        <DatePickerComponent 
        name="toDate" label="To Date" 
        getInputValue={(key, value) => setFilter(key, value)}

        />
      </div>
      <div className="col-lg-1 col-md-4 ">
        <Input
          label="Application ID"
          getInputValue={(key, value) => setFilter(key, value)}
          name="applicationId"
          placeholder="Application Id"
        />
      </div>

      <div className="col-lg-2 col-md-4 d-flex align-items-center">
        <button
          className="search-logger-btn bg-primary text-white cursor-pointer"
          onClick={() => filterData(filter)}
          
          

        >
          Search logger
        </button>
      </div>
    </div>
  );
}
