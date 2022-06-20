import React, {useState} from 'react'
import Input from '../../../components/partials/inputs/input'
import DropDown from '../../../components/partials/inputs/dropDown'
import './index.css'


export default function Index({filterData}) {
    const options = [{name: "ccc", value: "cC"}
    , {name: "ddd", value: "cvcvC"},
    {name: "jjjj", value: "cC"}


    ]
    const [filter,setFilters] = useState({
        employeeName: "",
actionType: "",
applicationType :"",
fromDate: "",
toDate:"",
applicationTd: "",
    })

    function setFilter(key,value){
  setFilters({
      ...filter, [key]: value
  })
    }
    
  return (
    <div className='row p-3'>
   <div className='col-lg-1 col-md-4'>
   <Input  label={'Employee Name'} 
   getInputValue={(key,value) => setFilter(key, value)}
   name="employeeName"
   />
   </div>
 
   <div className='col-lg-2 col-md-4'>
    <DropDown  options={options}
      name="applicationType"
      label="Application Type"
getInputValue={(key,value) => setFilter(key, value)}  
    />
   </div>
   <div className='col-lg-2 col-md-4'>
    <DropDown  options={options}
       name="actionType"
       label="Action Type"
getInputValue={(key,value) => setFilter(key, value)}    />
   </div>
   <div className='col-lg-1 col-md-4'>
   <Input />
   </div>
   <div className='col-lg-1 col-md-4'>
   <Input />
   </div>
   <div className='col-lg-1 col-md-4'
   >
   <Input 
   label="Application ID"
   getInputValue={(key,value) => setFilter(key, value)}
   name="applicationId"
   />
   </div>
   
   <div className='col-lg-2 col-md-4 d-flex align-items-center'>
     <button className='search-logger-btn bg-primary text-white cursor-pointer'   onClick={() => filterData(filter)}>
         Search logger
     </button>
   </div>

    </div>
  )
}
