import React from 'react'
import Input from '../../../components/partials/inputs/input'
import DropDown from '../../../components/partials/inputs/dropDown'
import './index.css'


export default function index() {
    const options = [{name: "ccc", value: "cC"}
    , {name: "ddd", value: "cvcvC"},
    {name: "jjjj", value: "cC"}
    ]
  return (
    <div className='row'>
   <div className='col-lg-1 col-md-4'>
   <Input />
   </div>
   <div className='col-lg-1 col-md-4'>
   <Input />
   </div>
   <div className='col-lg-2 col-md-4'>
    <DropDown  options={options}/>
   </div>
   <div className='col-lg-2 col-md-4'>
    <DropDown  options={options}/>
   </div>
   <div className='col-lg-1 col-md-4'>
   <Input />
   </div>
   <div className='col-lg-1 col-md-4'>
   <Input />
   </div>
   
   <div className='col-lg-2 col-md-4 d-flex align-items-center'>
     <button className='search-logger-btn bg-primary text-white'>
         Search logger
     </button>
   </div>

    </div>
  )
}
