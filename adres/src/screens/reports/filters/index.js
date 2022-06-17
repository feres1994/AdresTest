import React from 'react'
import Input from "../../../components/partials/inputs/input"
import DropDown from '../../../components/partials/inputs/dropDown'
export default function index() {
    const options = [{name: "ccc", value: "cC"}
    , {name: "ddd", value: "cvcvC"},
    {name: "jjjj", value: "cC"}
    ]
  return (
    <div>
    <Input />
    <DropDown  
    options={options}/>

    </div>
  )
}
